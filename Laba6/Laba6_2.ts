function sealedClass(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);

    const originalConstructor = constructor;
    const newConstructor: any = function(...args: any[]) {
        const instance = new (originalConstructor as any)(...args);
        Object.seal(instance);
        return instance;
    };

    newConstructor.prototype = Object.create(originalConstructor.prototype);
    newConstructor.prototype.constructor = originalConstructor; // Ensure constructor is set correctly
    return newConstructor;
}

function upperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}

@sealedClass
class Car {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    @upperCase
    getInfo(): string {
        return `Автомобиль: ${this.brand} ${this.model}, год выпуска: ${this.year}`;
    }
}

const car = new Car('Марка', 'Модель', 2025);

console.log(car.getInfo());

try {
    // @ts-ignore
    Car.prototype.newMethod = function() {
    };
    console.log('Добавленен метод.');
} catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка модификации:', e.message);
    } else {
        console.log('Неизвестная ошибка');
    }
}

try {// @ts-ignore
    car.newProperty = 'Свойство';
} catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка добавления:', e.message);
    } else {
        console.log('Неизвестная ошибка');
    }
}

export { Car };
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
function sealedClass(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    const originalConstructor = constructor;
    const newConstructor = function (...args) {
        const instance = new originalConstructor(...args);
        Object.seal(instance);
        return instance;
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}
function upperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
let Car = class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Автомобиль: ${this.brand} ${this.model}, год выпуска: ${this.year}`;
    }
};
exports.Car = Car;
__decorate([
    upperCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Car.prototype, "getInfo", null);
exports.Car = Car = __decorate([
    sealedClass,
    __metadata("design:paramtypes", [String, String, Number])
], Car);
const car = new Car('Марка', 'Модель', 2025);
console.log(car.getInfo());
try {
    // @ts-ignore
    Car.prototype.newMethod = function () {
    };
    console.log('Добавленен метод.');
}
catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка модификации:', e.message);
    }
    else {
        console.log('Неизвестная ошибка');
    }
}
try { // @ts-ignore
    car.newProperty = 'Свойство';
}
catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка добавления:', e.message);
    }
    else {
        console.log('Неизвестная ошибка');
    }
}

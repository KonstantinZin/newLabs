// 1 ВАРИАНТ 5

function returnNeg(arr: number[]): number{
    const negatives = numbers.filter(num=>num<0);
    return Math.max(...negatives);
}

const numbers: number[] = [-1, 2, -3, -4, 5, -6];
console.log('Максимальное отрицательное число:', returnNeg(numbers));

function booleanToNumberArray(booleanArray: boolean[][]): number[][] {
    return booleanArray.map(row => {
      return row.map(value => value ? 1 : 0);
    });
  }

const matrix: boolean[][] = [
    [false, true, false],
    [true, false, true],
    [false, true, false]
];
const numberMatrix: number[][] = booleanToNumberArray(matrix);
console.log(numberMatrix);

// 2
type MonkaS = [number, string, string];

function sumTuple(tuple: MonkaS): string {
    return tuple[2]+ ": " + tuple[1];
}

const myTuple: MonkaS = [1, "str0", "str1"];
console.log('Сумма строк в кортеже:', sumTuple(myTuple));

// 3
enum AminokislotaType {
    Am0 = "Am0",
    Am1 = "Am1",
    Am2 = "Am2",
    Am3 = "Am3",
    Am4 = "Am4"
}

console.log('Тип аминокислоты:', AminokislotaType.Am2);

// 4
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log({
        name: pet.name,
        age: pet.age,
        speech: pet.speak()
    });
}

const dog = new Dog();
const cat = new Cat();
console.log('Информация о собаке:');
printPetInfo(dog);
console.log('Информация о кошке:');
printPetInfo(cat);

// 5
interface Bababoyee {
    AminokislotaType: AminokislotaType;
    isVkusniy: boolean;
    isVredniy: boolean;
    isPurshazable: boolean;
    molekularWeight: number;
}

const Amk: Bababoyee = {
    AminokislotaType: AminokislotaType.Am2,
    isVkusniy: false,
    isVredniy: false,
    isPurshazable: true,
    molekularWeight: 10.5,
};

console.log('Что-то там из 5ого задания:\n'+JSON.stringify(Amk, null, 10));

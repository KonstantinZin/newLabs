// 1 ВАРИАНТ 5
function returnNeg(arr) {
    const negatives = numbers.filter(num => num < 0);
    return Math.max(...negatives);
}
const numbers = [-1, 2, -3, -4, 5, -6];
console.log('Максимальное отрицательное число:', returnNeg(numbers));
function booleanToNumberArray(booleanArray) {
    return booleanArray.map(row => {
        return row.map(value => value ? 1 : 0);
    });
}
const matrix = [
    [false, true, false],
    [true, false, true],
    [false, true, false]
];
const numberMatrix = booleanToNumberArray(matrix);
console.log(numberMatrix);
function sumTuple(tuple) {
    return tuple[2] + ": " + tuple[1];
}
const myTuple = [1, "str0", "str1"];
console.log('Сумма строк в кортеже:', sumTuple(myTuple));
// 3
var AminokislotaType;
(function (AminokislotaType) {
    AminokislotaType["Am0"] = "Am0";
    AminokislotaType["Am1"] = "Am1";
    AminokislotaType["Am2"] = "Am2";
    AminokislotaType["Am3"] = "Am3";
    AminokislotaType["Am4"] = "Am4";
})(AminokislotaType || (AminokislotaType = {}));
console.log('Тип аминокислоты:', AminokislotaType.Am2);
// 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
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
const Amk = {
    AminokislotaType: AminokislotaType.Am2,
    isVkusniy: false,
    isVredniy: false,
    isPurshazable: true,
    molekularWeight: 10.5,
};
console.log('Что-то там из 5ого задания:\n' + JSON.stringify(Amk, null, 10));

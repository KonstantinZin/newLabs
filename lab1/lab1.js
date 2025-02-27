"use strict";
const diffNumbers = (a, b) => a - b;
console.log('Вариант 5:', diffNumbers(10, 5)); // "5"
const numberValue = 157;
let stringValue = "Some String";
const booleanValue = true;
let arrayValue = ["1", "2", "Fumo"];
const nullValue = null;
let dateValue = new Date();
let undefinedValue = undefined;
const objectValue = { key: "value" };
const data = {
    id: 5,
    e1: 12345,
    e2: 999,
};
const jsonString = JSON.stringify(data);
console.log('Результат преобразования в JSON:');
console.log(jsonString);

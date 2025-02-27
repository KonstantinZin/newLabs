const diffNumbers = (a: number, b: number): number => a-b;
console.log('Вариант 5:', diffNumbers(10, 5)); // "5"

const numberValue: number = 157;
let stringValue: string = "Some String";
const booleanValue: boolean = true;
let arrayValue: string[] = ["1","2","Fumo"];
const nullValue: null = null;
let dateValue: Date = new Date();
let undefinedValue: undefined = undefined;
const objectValue: object = { key: "value" };

interface Entity{
    id:number;
}

interface ToJsonStringify extends
Entity{
    e1:number;
    e2:number;
}

const data:ToJsonStringify={
    id:5,
    e1:12345,
    e2:999,
}

const jsonString = JSON.stringify(data);
console.log('Результат преобразования в JSON:');
console.log(jsonString);
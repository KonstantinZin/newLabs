declare function returnNeg(arr: number[]): number;
declare const numbers: number[];
declare function booleanToNumberArray(booleanArray: boolean[][]): number[][];
declare const matrix: boolean[][];
declare const numberMatrix: number[][];
type MonkaS = [number, string, string];
declare function sumTuple(tuple: MonkaS): string;
declare const myTuple: MonkaS;
declare enum AminokislotaType {
    Am0 = "Am0",
    Am1 = "Am1",
    Am2 = "Am2",
    Am3 = "Am3",
    Am4 = "Am4"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare const dog: Dog;
declare const cat: Cat;
interface Bababoyee {
    AminokislotaType: AminokislotaType;
    isVkusniy: boolean;
    isVredniy: boolean;
    isPurshazable: boolean;
    molekularWeight: number;
}
declare const Amk: Bababoyee;

declare const diffNumbers: (a: number, b: number) => number;
declare const numberValue: number;
declare let stringValue: string;
declare const booleanValue: boolean;
declare let arrayValue: string[];
declare const nullValue: null;
declare let dateValue: Date;
declare let undefinedValue: undefined;
declare const objectValue: object;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: number;
    e2: number;
}
declare const data: ToJsonStringify;
declare const jsonString: string;

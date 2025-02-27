var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = [12, 23, 34, 45];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function removeOddNumbers(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                console.log(`Удалено нечетное число: ${arr[i]}`);
                arr.splice(i, 1);
                i--;
                console.log(`Текущий массив: ${arr.join(', ')}`);
                yield delay(1000);
            }
        }
    });
}
removeOddNumbers(data.slice())
    .then(() => {
    console.log("Конец программы...");
});

function writeStr(str) {
    return function () {
        console.log(str);
    };
}
const str = writeStr("String0");
str();
const strAgain = writeStr("String0");
strAgain();
str();

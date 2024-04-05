"use strict";
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function printResult(num) {
    console.log('Result ' + num);
}
function addAndHandle(an, bn, cb) {
    const result = an + bn;
    cb(result);
}
printResult(add(10, 17));
let combinedValues; //przyjmuje dwa parametry musi być funckjną i zwracać liczbę
combinedValues = add;
console.log(combinedValues(5, 5));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=Functions.js.map
"use strict";
console.log("Typy:");
console.log("Typy liczbowe");
function AddNumbers(numberOne, numberTwo) {
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}
const numberOne = 6;
const numberTwo = 5;
const resultAddNumbers = AddNumbers(numberOne, numberTwo);
console.log("Wynik dodawania: " + resultAddNumbers);
console.log("Stringi");
function AddStrings(numberOne, numberTwo) {
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}
const stringOne = "Stworzyłem ";
const stringTwo = "zdanie.";
const resultAddStrings = AddStrings(stringOne, stringTwo);
console.log("Wynik łączenia stringów to: " + resultAddStrings);
console.log("Boolean");
function AddBools(numberOne, numberTwo) {
    if (typeof numberOne === 'boolean' && typeof numberTwo === 'boolean') {
        console.log(typeof numberOne);
        return numberOne && numberTwo;
    }
    else {
        throw new Error("Niepoprawne parametry!");
    }
}
const booleanOne = true;
const booleanTwo = false;
const resultAddBools = AddBools(booleanOne, booleanTwo);
console.log("Wynik logicznego and: " + resultAddBools);
//# sourceMappingURL=Types.js.map
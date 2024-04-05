console.log("Typy:");
console.log("Typy liczbowe");
function AddNumbers(numberOne, numberTwo) {
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}
var numberOne = 6;
var numberTwo = 5;
var resultAddNumbers = AddNumbers(numberOne, numberTwo);
console.log("Wynik dodawania: " + resultAddNumbers);
console.log("Stringi");
function AddStrings(numberOne, numberTwo) {
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}
var stringOne = "Stworzyłem ";
var stringTwo = "zdanie.";
var resultAddStrings = AddStrings(stringOne, stringTwo);
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
var booleanOne = true;
var booleanTwo = false;
var resultAddBools = AddBools(booleanOne, booleanTwo);
console.log("Wynik logicznego and: " + resultAddBools);

"use strict";
const noOne = 5;
//const noTwo: number = 7; <-- nie deklarować, że zmienna jest danego typu, jeżeli jest zainicjowana z wartością od razu typ wartości jest rozpoznawany przy deklaracji wartości
let noTwo; //<-- jeżeli zmienna jest zainicjowana ale bez wartości, możemy określić jej typ
const showResult = true;
const prefix = "Wynik dodawania";
function Add(variableOne, variableTwo, passResult, prefix) {
    if (passResult) {
        var additionResult = variableOne + variableTwo;
        console.log(prefix + " to: " + additionResult);
        //console.log(prefix + " to: " + variableOne + variableTwo); <-- taka struktóra zamienia wszystko na stringi czyli 57 nie 12
    }
    else
        console.log(prefix + " został ukryty.");
}
noTwo = 7;
Add(noOne, noTwo, showResult, prefix);
//# sourceMappingURL=WorkingOnTypes.js.map
"use strict";
const noOne = 5;
let noTwo;
const showResult = true;
const prefix = "Wynik dodawania";
function Add(variableOne, variableTwo, passResult, prefix) {
    if (passResult) {
        var additionResult = variableOne + variableTwo;
        console.log(prefix + " to: " + additionResult);
    }
    else
        console.log(prefix + " został ukryty.");
}
noTwo = 7;
Add(noOne, noTwo, showResult, prefix);
//# sourceMappingURL=WorkingOnTypes.js.map
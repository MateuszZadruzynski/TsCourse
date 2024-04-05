var noOne = 5;
var noTwo = 7;
var showResult = true;
var prefix = "Wynik dodawania";
function Add(variableOne, variableTwo, passResult, prefix) {
    if (passResult)
        console.log(prefix + " to: " + variableOne + variableTwo);
    else
        console.log(prefix + " został ukryty.");
}
Add(noOne, noTwo, showResult, prefix);

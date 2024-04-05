function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function printResult(num) {
    console.log('Result ' + num);
}
function addAndHandle(an, bn, cb) {
    var result = an + bn;
    cb(result);
}
printResult(add(10, 17));
var combinedValues; //przyjmuje dwa parametry musi być funckjną i zwracać liczbę
combinedValues = add;
console.log(combinedValues(5, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

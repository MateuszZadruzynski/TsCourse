"use strict";
let jackAge;
let hanaAge;
let hasJackReachMaturity;
let hasHanaReachMaturity;
function GeneralPurposeAdd(variableOne, variableTwo) {
    let result;
    if (typeof variableOne === 'number' && typeof variableTwo === 'number')
        result = variableOne + variableTwo;
    else if (typeof variableOne === 'string' && typeof variableTwo === 'string')
        result = variableOne.toString() + variableTwo.toString();
    else if (typeof variableOne === 'boolean' && typeof variableTwo === 'boolean')
        result = variableOne && variableTwo;
    else
        result = "Result was other type than: number, string or boolean.";
    return result;
}
jackAge = 10;
hanaAge = 22;
hasJackReachMaturity = jackAge >= 21;
hasHanaReachMaturity = hanaAge >= 21;
const combinedAges = GeneralPurposeAdd(jackAge, hanaAge);
console.log("Combined age of: " + jackAge + " + " + hanaAge + " is " + combinedAges);
const haveBothReachedMaturity = GeneralPurposeAdd(hasJackReachMaturity, hasHanaReachMaturity);
console.log("Jack and Hana reached maturity is " + haveBothReachedMaturity);
//# sourceMappingURL=UnionType.js.map
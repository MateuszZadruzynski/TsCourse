"use strict";
let markAge;
let julieAge;
var resultType;
(function (resultType) {
    resultType[resultType["number"] = 0] = "number";
    resultType[resultType["string"] = 1] = "string";
    resultType[resultType["boolean"] = 2] = "boolean";
})(resultType || (resultType = {}));
function GeneralPurposeAddWithResultType(variableOne, variableTwo, resultConversion) {
    let result;
    if (typeof variableOne === 'number' && typeof variableTwo === 'number' || resultConversion == resultType.number)
        result = +variableOne + +variableTwo;
    else if (typeof variableOne === 'string' && typeof variableTwo === 'string' || resultConversion == resultType.string)
        result = variableOne.toString() + variableTwo.toString();
    else if (typeof variableOne === 'boolean' && typeof variableTwo === 'boolean' || resultConversion == resultType.boolean)
        result = Boolean(variableOne && variableTwo).valueOf();
    else
        result = "Result was other type than: number, string or boolean.";
    return result;
}
markAge = 10;
julieAge = 22;
const combinedAgesToNumber = GeneralPurposeAddWithResultType(markAge, julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesToNumber);
markAge = '15';
julieAge = '2';
const combinedAgesStringsToNumber = GeneralPurposeAddWithResultType(markAge, julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesStringsToNumber);
//# sourceMappingURL=LiteralType.js.map
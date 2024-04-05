var markAge;
var julieAge;
// let markAgeAsString: string;
// let julieAgeAsString: string;
var resultType;
(function (resultType) {
    resultType[resultType["number"] = 0] = "number";
    resultType[resultType["string"] = 1] = "string";
    resultType[resultType["boolean"] = 2] = "boolean";
})(resultType || (resultType = {}));
function GeneralPurposeAddWithResultType(variableOne, variableTwo, resultConversion) {
    var result;
    if (typeof variableOne === 'number' && typeof variableTwo === 'number' || resultConversion == resultType.number)
        result = +variableOne + +variableTwo;
    else if (typeof variableOne === 'string' && typeof variableTwo === 'string' || resultConversion == resultType.string)
        result = variableOne.toString() + variableTwo.toString();
    else if (typeof variableOne === 'boolean' && typeof variableTwo === 'boolean' || resultConversion == resultType.boolean)
        result = Boolean(variableOne && variableTwo).valueOf();
    else
        result = "Result was other type than: number, string or boolean.";
    // switch(+resultConversion)
    // {
    //     case +resultConversion:
    //         result = +result;
    //         break;
    //     case +resultConversion:
    //         result = result.toString();
    //         break;
    //     case +resultConversion:
    //         result = Boolean(result).valueOf();
    //     default:
    //         result = 'Unknown type';
    //         break;
    // }
    return result;
}
markAge = 10;
julieAge = 22;
var combinedAgesToNumber = GeneralPurposeAddWithResultType(markAge, julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesToNumber);
// markAgeAsString = '10';
// julieAgeAsString = '22';
markAge = '15';
julieAge = '2';
var combinedAgesStringsToNumber = GeneralPurposeAddWithResultType(markAge, julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesStringsToNumber);

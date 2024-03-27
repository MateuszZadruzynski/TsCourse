type Combined = number  | boolean | string;

let markAge: Combined ;
let julieAge: Combined;

// let markAgeAsString: string;
// let julieAgeAsString: string;

enum resultType {
    number,
    string,
    boolean
}

function GeneralPurposeAddWithResultType(variableOne: Combined, variableTwo: Combined, resultConversion: resultType) 
{
    let result;
    if(typeof variableOne === 'number' && typeof variableTwo === 'number' || resultConversion == resultType.number)
        result = +variableOne + +variableTwo;
    else if(typeof variableOne === 'string' && typeof variableTwo === 'string'|| resultConversion == resultType.string)
        result = variableOne.toString() + variableTwo.toString();
    else if(typeof variableOne === 'boolean' && typeof variableTwo === 'boolean'|| resultConversion == resultType.boolean)
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

const combinedAgesToNumber = GeneralPurposeAddWithResultType(markAge,julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesToNumber);

// markAgeAsString = '10';
// julieAgeAsString = '22';
markAge = '15';
julieAge = '2';

const combinedAgesStringsToNumber = GeneralPurposeAddWithResultType(markAge,julieAge, resultType.number);
console.log("Combined age of: " + markAge + " + " + julieAge + " is " + combinedAgesStringsToNumber);

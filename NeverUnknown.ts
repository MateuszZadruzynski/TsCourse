//let userInput: any; <-- wszystko nie musi być jakiś typ
let userInput: unknown; //<-- musi być jakiś typ
let userName: string;

userInput = 5;
userInput = true;
userInput = "found";

if(typeof  userInput === 'string')
    userName = userInput;



function generateError(header: string, code: number, description: string): never //throw nigdy nie zwraca wartości tylko przerywa kod
{
    throw {Header: header, ErrorCode:code, Description:description + userInput}
}


generateError('An error!', 404, 'The given source was not ');
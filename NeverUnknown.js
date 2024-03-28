//let userInput: any; <-- wszystko nie musi być jakiś typ
var userInput; //<-- musi być jakiś typ
var userName;
userInput = 5;
userInput = true;
userInput = "found";
if (typeof userInput === 'string')
    userName = userInput;
function generateError(header, code, description) {
    throw { Header: header, ErrorCode: code, Description: description + userInput };
}
generateError('An error!', 404, 'The given source was not ');

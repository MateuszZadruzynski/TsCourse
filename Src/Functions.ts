

function add(firstNumber: number, secondNumber: number) : number
{
    return firstNumber + secondNumber;
}

function printResult(num: number) : void
{
    console.log('Result '+ num);
}

function addAndHandle(an:number, bn:number, cb:(num:number) => void) {
    const result = an + bn;
    cb(result);
}

printResult(add(10,17));

let combinedValues: (a:number, b:number) => number; //przyjmuje dwa parametry musi być funckjną i zwracać liczbę

combinedValues = add;

console.log(combinedValues(5,5));

addAndHandle(10,20,(result)=>{
    console.log(result);
})
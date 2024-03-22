console.log("Typy:");

console.log("Typy liczbowe");
function AddNumbers(numberOne:number, numberTwo:number,)
{
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}

const numberOne = 6;
const numberTwo = 5;

const resultAddNumbers = AddNumbers(numberOne,numberTwo);
console.log("Wynik dodawania: " + resultAddNumbers);



console.log("Stringi");
function AddStrings(numberOne:string, numberTwo:string,)
{
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}

const stringOne = "Stworzyłem "; //5 - w przypadku podstawienia liczby błąd w 28 
const stringTwo = "zdanie.";

const resultAddStrings = AddStrings(stringOne,stringTwo);// w przypadku TS widzimy od razu czy typ zmiennej się zgadza
console.log("Wynik łączenia stringów to: " + resultAddStrings);


console.log("Boolean");
function AddBools(numberOne:boolean, numberTwo:boolean,)
{
    if(typeof numberOne === 'boolean' && typeof numberTwo === 'boolean') //sprawdzanie typu jak w JS
    {
        console.log(typeof numberOne);
        return numberOne && numberTwo;
    }
    else
    {
        throw new Error("Niepoprawne parametry!");
    }
}

const booleanOne = true;
const booleanTwo = false;

const resultAddBools = AddBools(booleanOne,booleanTwo);
console.log("Wynik logicznego and: " + resultAddBools);
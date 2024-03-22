enum Cities
{
    Bydgoszcz,
    Toruń,
    Warszawa,
    Gdańsk
}

console.log("Skrytki w miastach: ");
for(var city in Cities)
{
    console.log(city);
}

let person: {
    name: string, 
    age: number, 
    city: Cities
    items: string[]};


person = {
    name: 'mateusz',
    age: 25,
    city: Cities.Bydgoszcz,
    items: ['telefon','zegarek','czapka']
}
console.log("\n");
console.log("Pan "+person.name.toUpperCase() + " lat " + person.age + " posiada w " + person.city + " nastpępujące przedmioty " + person.items + " w deopozycie.");

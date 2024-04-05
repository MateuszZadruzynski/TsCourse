"use strict";
var Cities;
(function (Cities) {
    Cities[Cities["Bydgoszcz"] = 0] = "Bydgoszcz";
    Cities[Cities["Toru\u0144"] = 1] = "Toru\u0144";
    Cities[Cities["Warszawa"] = 2] = "Warszawa";
    Cities[Cities["Gda\u0144sk"] = 3] = "Gda\u0144sk";
})(Cities || (Cities = {}));
console.log("Skrytki w miastach: ");
for (var city in Cities) {
    console.log(city);
}
let person;
person = {
    name: 'mateusz',
    age: 25,
    city: Cities.Bydgoszcz,
    items: ['telefon', 'zegarek', 'czapka']
};
console.log("\n");
console.log("Pan " + person.name.toUpperCase() + " lat " + person.age + " posiada w " + person.city + " nastpępujące przedmioty " + person.items + " w deopozycie.");
//# sourceMappingURL=Objects.js.map
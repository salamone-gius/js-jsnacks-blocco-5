// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione ("benzina", "diesel", "gpl", "elettrico", "metano").
const auto = [
    {
        marca: "fiat",
        modello: "qubo",
        alimentazione: "diesel",
    },
    {
        marca: "opel",
        modello: "astra",
        alimentazione: "metano",
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione: "gpl",
    },
    {
        marca: "dacia",
        modello: "sandero",
        alimentazione: "gpl",
    },
    {
        marca: "ford",
        modello: "c3",
        alimentazione: "benzina",
    },
    {
        marca: "suzuki",
        modello: "swift",
        alimentazione: "diesel",
    },
    {
        marca: "toyota",
        modello: "yaris",
        alimentazione: "elettrico",
    },
    {
        marca: "bmw",
        modello: "x3",
        alimentazione: "diesel",
    },
    {
        marca: "mercedes",
        modello: "glc",
        alimentazione: "benzina",
    },
    {
        marca: "audi",
        modello: "a5",
        alimentazione: "benzina",
    }
]
console.log(auto);

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto (con metodo .filter).
let benzina = auto.filter((elm) => elm.alimentazione === "benzina");
let diesel = auto.filter((elm) => elm.alimentazione === "diesel");
let altro = auto.filter((elm) => elm.alimentazione !== "benzina" && elm.alimentazione !== "diesel");

// Infine stampa separatamente i 3 array.

console.log(benzina);
console.log(diesel);
console.log(altro);

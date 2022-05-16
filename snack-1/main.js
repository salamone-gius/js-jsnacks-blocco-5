// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
const zucchine = [
    {
        varietà: "bianca",
        peso: 100,
        lunghezza: 15,
    },
    {
        varietà: "gialla",
        peso: 100,
        lunghezza: 5,
    },
    {
        varietà: "verde",
        peso: 100,
        lunghezza: 10,
    },
    {
        varietà: "viola",
        peso: 100,
        lunghezza: 12,
    },
    {
        varietà: "blu",
        peso: 100,
        lunghezza: 18,
    },
    {
        varietà: "nera",
        peso: 100,
        lunghezza: 20,
    },
    {
        varietà: "rossa",
        peso: 100,
        lunghezza: 21,
    },
    {
        varietà: "azzurra",
        peso: 100,
        lunghezza: 23,
    },
    {
        varietà: "oro",
        peso: 100,
        lunghezza: 24,
    },
    {
        varietà: "argento",
        peso: 100,
        lunghezza: 30,
    }
]
console.log(zucchine);

// Calcola quanto pesano tutte le zucchine.
let pesoTotale = 0;

for (let i = 0; i < zucchine.length; i++) {
    pesoTotale = pesoTotale + zucchine[i].peso;
}

console.log(pesoTotale);

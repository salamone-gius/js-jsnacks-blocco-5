// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
const zucchine = [
    {
        varietà: "bianca",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "gialla",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "verde",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "viola",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "blu",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "nera",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "rossa",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "azzurra",
        peso: 100,
        lunghezza: 30,
    },
    {
        varietà: "oro",
        peso: 100,
        lunghezza: 30,
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

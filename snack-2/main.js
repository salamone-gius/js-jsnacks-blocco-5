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

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let menoDiQuindici = [];
let piuDiQuindici = [];
for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        menoDiQuindici.push(zucchine[i]);
    } else {
        piuDiQuindici.push(zucchine[i]);
    }
}

console.log(menoDiQuindici);
console.log(piuDiQuindici);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let pesoTotaleMenoDiQuindici = 0;
let pesoTotalePiuDiQuindici = 0;

for (let i = 0; i < menoDiQuindici.length; i++) {
    pesoTotaleMenoDiQuindici = pesoTotaleMenoDiQuindici + menoDiQuindici[i].peso;
}

for (let i = 0; i < piuDiQuindici.length; i++) {
    pesoTotalePiuDiQuindici = pesoTotalePiuDiQuindici + piuDiQuindici[i].peso;
}

console.log(pesoTotaleMenoDiQuindici);
console.log(pesoTotalePiuDiQuindici);


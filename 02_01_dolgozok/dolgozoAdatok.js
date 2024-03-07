const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

// 1. feladat
function berkoltseg() {
    let koltseg = 0;
    for (let i = 0; i < Dolgozok.length; i++) {
        koltseg += Dolgozok[i].fizetes;
    }
    return koltseg;
}
console.log(berkoltseg());
// 2. feladat
function legmagasabbFizetes() {
    let legmagasabbFizetesuDolgozo = Dolgozok[0];
    for (let i = 0; i < Dolgozok.length; i++) {
        if (Dolgozok[i].fizetes > legmagasabbFizetesuDolgozo.fizetes) {
            legmagasabbFizetesuDolgozo = Dolgozok[i]
            console.log("Új legmagasabb fizetésű dolgozó: ", legmagasabbFizetesuDolgozo)
        }
    }
    return legmagasabbFizetesuDolgozo;
}
console.log(legmagasabbFizetes())

// 3. feladat
function legfiatalabb() {
    let legfiatalabb = Dolgozok[0];
    for (let i = 0; i < Dolgozok.length; i++) {
        if (Dolgozok[i].kor < legfiatalabb.kor) {
            legfiatalabb = Dolgozok[i]
        }
    }
    return legfiatalabb;
}
console.log(legfiatalabb().nev, legfiatalabb().fizetes + 30000)

// 5. feladat
function atlagFizetes() {
    return berkoltseg() / Dolgozok.length;
}
console.log(atlagFizetes());

// 6. feladat
function fizetesEmeles() {
    for (let i = 0; i < Dolgozok.length; i++) {
        if (Dolgozok[i].fizetes < atlagFizetes()) {
            Dolgozok[i].fizetes *= 1.1
        }
    }
}
fizetesEmeles();
console.log(Dolgozok)
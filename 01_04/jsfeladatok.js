// első feladat
console.log("Pandur Ádám");
console.log("Team13");
console.log("HTML:75");
console.log("CSS:75")
console.log("JavaScript:70");

// második feladat
let szam = Number("Adj meg egy számot: ");
let hatvany = Number("Add meg a hatvány értékét: ");
let eredmeny = Math.pow(szam, hatvany);
console.log(`A(z) ${szam}a(z) ${hatvany} hatvány eredménye: ${eredmeny}`);

// harmadik feladat
let also = Number(prompt("Add meg az alsó határértéket:"));
let felso = Number(prompt("Add meg a felső határértéket:"));
let generaltSzam = Math.round(Math.random() * (felso - also)) + also;
if (generaltSzam % 2 == 0) {
    console.log(`A generált szám: ${generaltSzam}`);
}
else if (generaltSzam != felso) {
    console.log(`A generált szám: ${generaltSzam + 1}`);
}
else {
    console.log(`A generált szám: ${generaltSzam - 1}`);
}

// negyedik feladat
let kor = Number(prompt("Add meg az életkort:"));
if (kor >= 0 && kor < 6) {
    document.write(`Az illető ${kor} évesen kisgyermekkorban van`);
}
else if (kor >= 6 && kor < 12) {
    document.write(`Az illető ${kor} évesen gyermekkorban van`);
}
else if (kor >= 12 && kor < 16) {
    document.write(`Az illető ${kor} évesen serdülőkorban van`);
}
else if (kor >= 16 && kor < 20) {
    document.write(`Az illető ${kor} évesen ifjúkorban van`);
}
else if (kor >= 20 && kor < 30) {
    document.write(`Az illető ${kor} évesen fiatal felnőtt korban van`);
}
else if (kor >= 30 && kor < 60) {
    document.write(`Az illető ${kor} évesen felnőtt korban van`);
}
else if (kor >= 60 && kor < 120) {
    document.write(`Az illető ${kor} évesen aggkorban van`);
}
else {
    document.write(`${kor} hibás adat`);
}

// ötödik feladat
let vizsgalandoSzam = Number(prompt("Add meg a vizsgálandó számot:"));
let oszto = Number(prompt("Add meg a vizsgálandó osztót:"));
if (szam % oszto == 0) {
    document.write(`A ${oszto} osztója a(z) ${vizsgalandoSzam}nak`);
}
else {
    document.write(`A ${oszto} NEM osztója a ${vizsgalandoSzam}-nak`);
}

// hatodik feladat
for (let i = 1; i <= 10; i++) {
    document.write(i * i + ",");
}
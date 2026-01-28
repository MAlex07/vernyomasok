import fs from "fs";
import path from "path";

const lista = [];

const vezeteknevek = ["Kovács", "Szabó", "Tóth", "Nagy", "Varga",
  "Kiss", "Molnár", "Balogh", "Farkas", "Papp"];

const keresztnevek = ["János", "Péter", "László", "Gábor", "Zoltán",
  "Anna", "Éva", "Katalin", "Mária", "Judit"]

function randomElem(tomb) {
  return tomb[Math.floor(Math.random() * tomb.length)];
}


function randomVerNyomas() {
  const szisztoles = Math.floor(Math.random() * (160 - 90 + 1)) + 90;
  const diasztoles = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  return `${szisztoles}/${diasztoles}`;
}

for (let i = 0; i < 20; i++) {
  lista.push({
    nev: `${randomElem(vezeteknevek)} ${randomElem(keresztnevek)}`,
    vernyomas: randomVerNyomas()
  });
}

const jsonSzoveg = JSON.stringify(lista, null, 2);

const filePath = path.join("public", "test.json");
fs.writeFileSync(filePath, jsonSzoveg, "utf-8");

console.log("✅ test.json sikeresen létrehozva a public mappában");
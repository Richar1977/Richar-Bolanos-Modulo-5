const fs = require("fs");

// Genero los números de 1 al 1000
const numeros = Array.from({ length: 1000 }, (_, i) => i + 1);

// Convierto números a string y unidos con comas
const numerosString = numeros.join("\n");

// Escribo archivo numeros.txt
fs.writeFile("numeros.txt", numerosString, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Archivo numeros.txt generado con éxito");
  }
});

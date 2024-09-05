const fs = require("fs");

// Hago Leer el archivo numeros.txt escrito en "generator.js"
fs.readFile("numeros.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // Divido los datos en array de números
    const numeros = data.split("\n").map((numero) => parseInt(numero));

    // Encontro los números pares
    const numerosPares = numeros.filter((numero) => numero % 2 === 0);

    // Mustro los números pares en pantalla
    console.log("Números pares:");
    console.log(numerosPares.join(", "));

    // Opcional: genero un archivo con números pares "numerosPares.txt"
    fs.writeFile("numerosPares.txt", numerosPares.join("\n"), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Archivo numerosPares.txt generado con éxito!");
      }
    });
  }
});

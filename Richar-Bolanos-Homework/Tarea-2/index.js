// index.js
import Chance from "chance";

const chance = new Chance();

// Generar datos aleatorios
const nombre = chance.name();
const apellido = chance.last();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();
const direccion = chance.address();
const edad = chance.age();
const genero = chance.gender();
const profesion = chance.profession();

// Imprimir los datos aleatorios generados
console.log("Datos aleatorios generados:");
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Correo electrónico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
console.log("Teléfono:", telefono);
console.log("Dirección:", direccion);
console.log("Edad:", edad);
console.log("Genero:", genero);
console.log("Profesion:", profesion);

// Array de estudiantes
const estudiantes = [
  { nombre: "Pedro", edad: 29, promedio: 7.9 },
  { nombre: "Ana", edad: 33, promedio: 8.9 },
  { nombre: "Pablo", edad: 32, promedio: 9.5 },
  { nombre: "Juan", edad: 25, promedio: 6.0 },
  { nombre: "Maria", edad: 28, promedio: 7.3 },
  { nombre: "Andres", edad: 45, promedio: 8.7 },
];

// Inicializo las variables
let estudianteMejor = null;
let promedioMaximo = 0;

// Recorro el array de estudiantes con bucle for
for (let i = 0; i < estudiantes.length; i++) {
  let estudiante = estudiantes[i];
  if (estudiante.promedio > promedioMaximo) {
    promedioMaximo = estudiante.promedio;
    estudianteMejor = estudiante;
  }
}

// Imprimo el resultado en consola
console.log(
  `El estudiante con el mayor promedio es ${estudianteMejor.nombre} con un promedio de ${promedioMaximo}`
);

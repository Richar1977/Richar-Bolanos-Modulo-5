// Array de libros
let libros = [
  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 300 },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 400,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    paginas: 350,
  },
];

// Imprimo el nombre y el autor del segundo libro
console.log(libros[1].titulo); // Cien años de soledad
console.log(libros[1].autor); // Gabriel García Márquez

// Actualizo el número de páginas del primer libro
libros[0].paginas = 350;

// Imprimo la información completa del primer libro después de la actualización
console.log(libros[0]);
// { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 350 }

// Hago un nuevo array de libros con solo título y autor utilizando `map`
const nuevosLibros = libros.map((libro) => ({
  titulo: libro.titulo,
  autor: libro.autor,
}));

console.log(nuevosLibros);
// [
//   { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien' },
//   { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
//   { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling' }
// ]

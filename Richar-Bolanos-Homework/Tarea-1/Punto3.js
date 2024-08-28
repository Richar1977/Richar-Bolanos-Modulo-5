// Array de productos
let productos = [
  { nombre: "Camisa", categoria: "Ropa", precio: 20 },
  { nombre: "Computadora", categoria: "Electrónica", precio: 800 },
  { nombre: "Zapatos", categoria: "Ropa", precio: 50 },
  { nombre: "Teléfono", categoria: "Electrónica", precio: 300 },
];

// Filtro los productos con categoría 'Ropa'
let productosRopa = productos.filter(
  (producto) => producto.categoria === "Ropa"
);

// Imprimo productos con categoría 'Ropa'
console.log("Productos de Ropa:");
productosRopa.forEach((producto) =>
  console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`)
);

// Filtro los productos con precio mayor a 30
let preciosMayores = productos.filter((producto) => producto.precio > 30);

// Imprimo productos con precio mayor a 30
console.log("Productos con precio mayor de 30:");
preciosMayores.forEach((producto) =>
  console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`)
);

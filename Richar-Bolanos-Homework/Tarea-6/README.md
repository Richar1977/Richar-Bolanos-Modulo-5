# API de Productos

## Endpoints

### GET /products

Retorna la lista de todos los productos en formato JSON.

### GET /products/:id

Retorna los detalles de un producto específico basado en el ID. Si no se encuentra el producto, devuelve un mensaje de error apropiado.

## Ejemplos de uso

- Obtener la lista de productos: `GET http://localhost:3002/products`
- Obtener los detalles del producto con ID 1: `GET http://localhost:3002/products/1`

## Capturas de pantalla

![Get all products](https://imgur.com/a/0v89Jht)

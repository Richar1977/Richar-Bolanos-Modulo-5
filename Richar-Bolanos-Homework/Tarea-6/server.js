const http = require('http');

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
  { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/products':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(products));
      break;
    case `/products/:id`:
      const id = req.url.split('/')[2];
      const product = products.find((product) => product.id === parseInt(id));
      if (product) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(product));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Product not found');
      }
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
  }
});

server.listen(3002, () => {
  console.log('Server listening on port 3002');
});
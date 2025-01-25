// Crear un servidor.

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Estoy aprendiendo Node.js');
});

server.listen(3000);
console.log('Servidor corriendo en el puerto 3000');
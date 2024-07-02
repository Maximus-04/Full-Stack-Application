const http = require('http');

// Creates an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Listens on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000');
});

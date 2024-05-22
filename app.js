const http = require ('http');
const hostname = '127.0.0.1';
const port = 3000;
//hostnme + port = http://localhost:3000
const server = http.createServer((req, res) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

/**
 * 
 * request = o cliente (browser) faz uma requisição ao servidor
 * response = o servidor responde ao cliente (browser) 
 * 
 */
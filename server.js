const http = require('http');
const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader('Content-type', 'text-plain');
    res.end('Hello, world\n');
})
const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
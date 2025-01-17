const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the server will hang indefinitely
  // res.end(); 

  // Simulate long-running operation
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
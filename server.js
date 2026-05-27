const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type

  res.setHeader('Content-Type', 'text/html');

  res.write('<p>Hello, world</p>');
  res.write('<p>Hello, world ver 2</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for req port 3000');
});

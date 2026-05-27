const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type

  res.setHeader('Content-Type', 'text/html');

  // sent an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data); we can use end with inly one file
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for req port 3000');
});

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.write('Hello, world!123');
  res.end();
});

server.listen(port, () => {
  console.log('Testing server');
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }

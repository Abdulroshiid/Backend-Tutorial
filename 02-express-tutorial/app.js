const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(`User hit the server!`);
  res.end(`Home Page`);
});

server.listen(PORT);

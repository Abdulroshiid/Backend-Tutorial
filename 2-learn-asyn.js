const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`This is the HomePage`);
  }
});

server.listen(5000, () => {
  console.log(`Server is listening on port: 5000... `);
});

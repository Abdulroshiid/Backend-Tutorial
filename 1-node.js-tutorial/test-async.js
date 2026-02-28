const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Deliver Home Page");
  } else if (req.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} and ${j}`);
      }
    }
    res.end("Deliver About Page");
  } else {
    res.end(`Opps this is an Error Page!`);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port 5000...`);
});

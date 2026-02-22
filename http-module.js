const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("This is the about us page");
  } else {
    res.end("Opps! This is not available");
  }
});

server.listen(5000);

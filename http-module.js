const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("This is the about us page");
  } else {
    res.end(`
    <h1>The page you are looking for is unavailable at the moment.</h1>
    <a href="/">Go back home</a>
    `);
  }
});

server.listen(5000);

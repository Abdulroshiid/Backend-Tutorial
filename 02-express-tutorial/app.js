const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write;
    ("This is the Home Page");
    res.end();
    // About Page
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is the About Page");
    res.end();
    // Error Page
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("Resource not Found!!");
    res.end();
  }
});

server.listen(PORT);

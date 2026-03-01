const http = require("http");
const { readFileSync, read } = require("fs");
const PORT = 5000;

const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    // About Page
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is the About Page");
    res.end();
    // Styles Page
  } else if (url === "/styles") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
    // Logo Page
  } else if (url === "/logo") {
    res.writeHead(200, { "content-type": "text/svg" });
    res.write(homeLogo);
    res.end();
    // Logic Page (JavaScript)
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`Page Not Found!`);
    res.end();
  }
});

server.listen(PORT);

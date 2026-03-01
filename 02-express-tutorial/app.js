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
    // Error Page
  } else if (url === "/styles") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
});

server.listen(PORT);

const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "./navbar-app/styles.css"));
});
app.get("/browser-app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./navbar-app/browser-app.js"));
});

app.get("*", (req, res) => {
  res.status(404).send(`Page Not Found!`);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

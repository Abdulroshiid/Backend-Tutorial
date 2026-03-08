const express = require("express");
const app = express();
const PORT = 5000;
const logger = require("./logger");
const authorize = require("./authorize");
const data = require("./data");

// req => middleware => res
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send(`Home Page`);
});
app.get("/about", (req, res) => {
  res.send(`About Page`);
});
app.get("/api/data", (req, res) => {
  res.json(data.products);
});
app.get("/api/data/people", (req, res) => {
  res.json(data.people);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

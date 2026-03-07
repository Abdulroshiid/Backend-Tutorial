const express = require("express");
const app = express();
const PORT = 5000;
const logger = require("./logger");

// req => middleware => res

app.get("/", logger, (req, res) => {
  res.send(`Home Page`);
});
app.get("/about", logger, (req, res) => {
  res.send(`About Page`);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

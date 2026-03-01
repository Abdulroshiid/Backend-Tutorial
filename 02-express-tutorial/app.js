const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send(`Home Page`);
});
app.get("/about", (req, res) => {
  res.status(200).send(`This is the About Page`);
});
app.all("*", (req, res) => {
  res.status(404).send(`Resource Not Found`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

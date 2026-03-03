const express = require("express");
const app = express();
const { products } = require("./data");
const PORT = 5000;

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

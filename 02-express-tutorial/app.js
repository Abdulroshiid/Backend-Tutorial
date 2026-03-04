const express = require("express");
const app = express();
const { products } = require("./data");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">Our Products</a>`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

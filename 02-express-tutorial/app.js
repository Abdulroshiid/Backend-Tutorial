const express = require("express");
const app = express();
const { products } = require("./data");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">Our Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newProducts);
});
app.get("/api/products/:productId", (req, res) => {
  const idSelection = Number(req.params.productId);

  const getSingleProduct = products.find(
    (product) => product.id === idSelection,
  );
  if (!getSingleProduct) {
    return res.status(404).send(`Opps! Product Does Not Exist`);
  }
  res.json(getSingleProduct);
});
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

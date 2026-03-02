const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {});

app.get("*", (req, res) => {
  res.status(404).send(`Page Not Found!`);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

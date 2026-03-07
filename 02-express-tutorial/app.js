const express = require("express");
const app = express();
const PORT = 5000;

// req => middleware => res
app.get("/", (req, res) => {
  res.send(`Home Page`);
});
app.get("/about", (req, res) => {
  res.send(`About Page`);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

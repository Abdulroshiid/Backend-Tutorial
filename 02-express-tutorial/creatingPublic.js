const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.static("./public"));

// Setup static and middleware

app.get("*", (req, res) => {
  res.status(404).send(`Page Not Found!`);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}...`);
});

const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");

console.log(people);
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});

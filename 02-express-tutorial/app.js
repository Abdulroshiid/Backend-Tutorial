const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");
// Static assets
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome, ${name}`);
  } else {
    res.status(401).send(`Please, provide the necessary credentials.`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});

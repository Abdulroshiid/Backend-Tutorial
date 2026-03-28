const express = require("express");
const app = express();
const PORT = 5000;

const people = require("./routes/people");

// Static assets
app.use(express.static("./methods-public"));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome, ${name}, your account have been created.`);
  } else {
    res.status(401).send(`Please, enter a user name.`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});

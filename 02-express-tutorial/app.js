const express = require("express");
const app = express();
const PORT = 5000;

const people = require("./routes/people");
const login = require("./routes/auth");

// Static assets
app.use(express.static("./methods-public"));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});

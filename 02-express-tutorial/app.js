const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");
// Static assets
app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}...`);
});

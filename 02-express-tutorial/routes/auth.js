const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome, ${name}, your account have been created.`);
  } else {
    res.status(401).send(`Please, enter a user name.`);
  }
});

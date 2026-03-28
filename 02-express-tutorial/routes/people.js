const express = require("express");
const router = express.Router();

const {
  getUser,
  post,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/people");

router.get("/", getUser);

// THE POST METHOD

router.post("/", post);

router.post("/postuser", postUser);

// THE PUT METHOD

router.put("/:id", updateUser);

// THE DELETE METHOD

router.delete("/:id", deleteUser);

module.exports = router;

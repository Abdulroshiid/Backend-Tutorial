const express = require("express");
const router = express.Router();

const {
  getUser,
  post,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/people");

router.get("/");

// THE POST METHOD

router.post("/");

router.post("/postuser");

// THE PUT METHOD

router.put("/:id");

// THE DELETE METHOD

router.delete("/:id");

module.exports = router;

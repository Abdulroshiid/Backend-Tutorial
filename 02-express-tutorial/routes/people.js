const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.get("/");

// THE POST METHOD

router.post("/");

router.post("/postuser");

// THE PUT METHOD

router.put("/:id");

// THE DELETE METHOD

router.delete("/:id");

module.exports = router;

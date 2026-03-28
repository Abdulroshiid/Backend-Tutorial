const express = require("express");
const router = express.Router();

// Fetching the components from the controllers
const {
  getUser,
  post,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/people");

// FIRST WAY OF ROUTING

//THE GET METHOD
router.get("/", getUser);
// THE POST METHOD
router.post("/", post);
router.post("/postuser", postUser);
// THE PUT METHOD
router.put("/:id", updateUser);
// THE DELETE METHOD
router.delete("/:id", deleteUser);

// SECOND WAY OF ROUTING... PS: MORE CLEANER AND WELL STRUCTURED

// router.route("/").get(getUser).post(post);
// router.route("/postUser").post(postUser);
// router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;

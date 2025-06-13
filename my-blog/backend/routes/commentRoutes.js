const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getComments,
  postComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getComments); // Public: fetch comments
router.post("/", protect, postComment); // Authenticated: post comment

module.exports = router;

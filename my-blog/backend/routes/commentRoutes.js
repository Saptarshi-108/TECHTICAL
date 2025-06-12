const express = require("express");
const {
  getCommentsForBlog,
  addComment,
} = require("../controllers/commentController");

const router = express.Router();

router.get("/:blogId", getCommentsForBlog);
router.post("/:blogId", addComment);

module.exports = router;

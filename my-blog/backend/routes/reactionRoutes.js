const express = require("express");
const { likeBlog, dislikeBlog } = require("../controllers/reactionController");

const router = express.Router();

router.post("/:blogId/like", likeBlog);
router.post("/:blogId/dislike", dislikeBlog);

module.exports = router;

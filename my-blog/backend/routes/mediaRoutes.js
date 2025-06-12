const express = require("express");
const {
  getMediaForBlog,
  uploadMedia,
} = require("../controllers/mediaController");

const router = express.Router();

router.get("/:blogId", getMediaForBlog);
router.post("/", uploadMedia);

module.exports = router;

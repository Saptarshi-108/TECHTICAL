const express = require("express");
const router = express.Router();
const mediaControllers = require("../controllers/mediaController");
const upload = require("../middleware/upload");

router.get("/:blogId", mediaControllers.getMediaForBlog);

// Accept single file upload with field "media"
router.post("/upload", upload.single("media"), mediaControllers.uploadMedia);

module.exports = router;

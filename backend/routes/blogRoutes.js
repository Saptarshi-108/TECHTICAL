const express = require("express");
const router = express.Router();
const { getAllBlogs, getBlogById } = require("../controllers/blogController");
const commentRoutes = require("./commentRoutes");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

// Mount comment routes under blog/:id/comments
router.use("/:blogId/comments", commentRoutes);

module.exports = router;

const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

// Public (reader-level) access
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

// Admin-only access
router.post("/create", protect, authorizeRoles("admin"), createBlog);
router.put("/:id", protect, authorizeRoles("admin"), updateBlog);
router.delete("/:id", protect, authorizeRoles("admin"), deleteBlog);

module.exports = router;

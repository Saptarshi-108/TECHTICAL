const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  getBlogsByUser, // ✅ add this
} = require("../controllers/blogController");
const commentRoutes = require("./commentRoutes");
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ fix this line
router.get("/user/:userId", protect, getBlogsByUser);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.use("/:blogId/comments", commentRoutes);
router.post("/create", protect, upload.single("coverImage"), createBlog);

module.exports = router;

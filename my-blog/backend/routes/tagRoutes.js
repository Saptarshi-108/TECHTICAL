const express = require("express");
const router = express.Router();
const {
  createTag,
  getTags,
  deleteTag,
} = require("../controllers/tagController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Public: Get all tags
router.get("/", getTags);

// Admin: Create a new tag
router.post("/", protect, authorizeRoles("admin"), createTag);

// Admin: Delete a tag by ID
router.delete("/:id", protect, authorizeRoles("admin"), deleteTag);

module.exports = router;

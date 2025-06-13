const Tag = require("../models/Tag");
const slugify = require("../utils/slugify");

// Create a new tag
exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Tag name is required" });
    }

    const slug = slugify(name);
    const existingTag = await Tag.findOne({ slug });

    if (existingTag) {
      return res.status(409).json({ message: "Tag already exists" });
    }

    const newTag = await Tag.create({ name, slug, description });
    res.status(201).json(newTag);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create tag", error: error.message });
  }
};

// Get all tags
exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.find().sort({ name: 1 });
    res.status(200).json(tags);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tags", error: error.message });
  }
};

// Delete a tag
exports.deleteTag = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Tag.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Tag not found" });
    }

    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete tag", error: error.message });
  }
};

const Comment = require("../models/Comment");
const Blog = require("../models/Blog");

exports.getComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blog: blogId })
      .populate("author", "username")
      .sort({ createdAt: 1 });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load comments" });
  }
};

exports.postComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { content } = req.body;

    if (!content.trim())
      return res.status(400).json({ message: "Comment cannot be empty" });

    const blogExists = await Blog.exists({ _id: blogId });
    if (!blogExists) return res.status(404).json({ message: "Blog not found" });

    const comment = await Comment.create({
      blog: blogId,
      author: req.user._id,
      content,
    });

    const populated = await comment.populate("author", "username");
    res.status(201).json(populated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to post comment" });
  }
};

const Comment = require("../models/Comment");

exports.getCommentsForBlog = async (req, res) => {
  const comments = await Comment.find({ blogId: req.params.blogId }).populate(
    "userId",
    "username"
  );
  res.json(comments);
};

exports.addComment = async (req, res) => {
  const { blogId } = req.params;
  const comment = new Comment({ blogId, ...req.body });
  const saved = await comment.save();
  res.status(201).json(saved);
};

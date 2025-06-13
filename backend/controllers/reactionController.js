const Blog = require("../models/Blog");

exports.likeBlog = async (req, res) => {
  const { blogId } = req.params;
  const { userId } = req.body;

  const blog = await Blog.findById(blogId);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.dislikes = blog.dislikes.filter((id) => id.toString() !== userId);
  if (blog.likes.includes(userId)) {
    blog.likes = blog.likes.filter((id) => id.toString() !== userId);
  } else {
    blog.likes.push(userId);
  }

  await blog.save();
  res.json({ likes: blog.likes.length, dislikes: blog.dislikes.length });
};

exports.dislikeBlog = async (req, res) => {
  const { blogId } = req.params;
  const { userId } = req.body;

  const blog = await Blog.findById(blogId);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.likes = blog.likes.filter((id) => id.toString() !== userId);
  if (blog.dislikes.includes(userId)) {
    blog.dislikes = blog.dislikes.filter((id) => id.toString() !== userId);
  } else {
    blog.dislikes.push(userId);
  }

  await blog.save();
  res.json({ likes: blog.likes.length, dislikes: blog.dislikes.length });
};

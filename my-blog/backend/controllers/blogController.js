const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "username email");
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate(
    "author",
    "username email"
  );
  if (!blog) return res.status(404).json({ message: "Not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const blog = new Blog(req.body);
  const saved = await blog.save();
  res.status(201).json(saved);
};
exports.updateBlog = async (req, res) => {
  const { id } = req.params;

  const updated = await Blog.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(updated);
};

exports.deleteBlog = async (req, res) => {
  const deleted = await Blog.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};

exports.getAllBlogs = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(limit);
  res.json(blogs);
};

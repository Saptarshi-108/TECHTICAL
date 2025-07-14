const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .select("title coverImage createdAt");
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching blogs" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching blog" });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required" });
    }

    const newBlog = new Blog({
      title,
      content,
      coverImage: `/uploads/${req.file.filename}`,
      author: req.user.id,
    });

    const saved = await newBlog.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Blog creation failed" });
  }
};
exports.getBlogsByUser = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.params.userId }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

const Media = require("../models/Media");

exports.getMediaForBlog = async (req, res) => {
  const media = await Media.find({ blogId: req.params.blogId });
  res.json(media);
};

exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const media = new Media({
      blogId: req.body.blogId,
      type: req.file.mimetype.startsWith("video") ? "video" : "image",
      url: `/uploads/${req.file.filename}`, // local path
    });

    const saved = await media.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Media upload failed" });
  }
};

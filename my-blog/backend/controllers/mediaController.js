const Media = require("../models/Media");

exports.getMediaForBlog = async (req, res) => {
  const media = await Media.find({ blogId: req.params.blogId });
  res.json(media);
};

exports.uploadMedia = async (req, res) => {
  const media = new Media(req.body); // use multer/cloud upload in real apps
  const saved = await media.save();
  res.status(201).json(saved);
};

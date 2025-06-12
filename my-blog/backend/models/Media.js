const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["image", "video", "audio"],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);

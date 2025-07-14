const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      enum: ["admin", "reader"], // add all roles used in your app
    },
    permissions: {
      type: [String],
      default: [], // e.g., ['create', 'edit', 'delete']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);

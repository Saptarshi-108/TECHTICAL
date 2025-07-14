const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "reader"],
      default: "reader",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

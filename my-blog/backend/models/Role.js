const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [
    {
      type: String,
    },
  ], // optional: ['edit', 'delete']
});

module.exports = mongoose.model("Role", roleSchema);

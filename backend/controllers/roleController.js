const Role = require("../models/Role");

// GET all roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    console.error("Error fetching roles:", err.message);
    res.status(500).json({ message: "Failed to retrieve roles" });
  }
};

// POST create a new role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    if (!name)
      return res.status(400).json({ message: "Role name is required" });
    const existing = await Role.findOne({ name });
    if (existing)
      return res
        .status(409)
        .json({ message: "Role with this name already exists" });

    const role = new Role({ name, permissions });
    await role.save();

    res.status(201).json(role);
  } catch (err) {
    console.error("Error creating role:", err.message);
    res.status(500).json({ message: "Failed to create role" });
  }
};

const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register new user
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "Email already registered" });

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const readerRole = await Role.findOne({ roleName: "reader" });

  const user = await User.create({
    username,
    email,
    passwordHash,
    role: readerRole ? readerRole._id : null,
  });

  res.status(201).json({
    id: user._id,
    username: user.username,
    email: user.email,
    role: readerRole?.roleName || "reader",
    token: generateToken(user._id),
  });
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("role");

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role?.roleName || "reader",
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// // Example route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/roles", require("./routes/roleRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/media", require("./routes/mediaRoutes"));
app.use("/api/reactions", require("./routes/reactionRoutes"));
app.use("/api/tags", require("./routes/tagRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//error ki maa behen karne hetu
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const authRoutes = require("./routes/authRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");



// load env variables
dotenv.config();

const app = express();

// middleware

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);



// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user
  });
});

app.get("/api/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});
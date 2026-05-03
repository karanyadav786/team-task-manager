const express = require("express");
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE PROJECT
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description } = req.body;

    // debug check
    console.log("User from token:", req.user);

    const project = new Project({
      name,
      description,
      createdBy: req.user.id,
      members: [req.user.id],
    });

    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// GET ALL PROJECTS (only logged-in user)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user.id
    });

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ADD MEMBER TO PROJECT (only logged-in user)
router.post("/add-member", authMiddleware, async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // check if already member
    if (project.members.includes(userId)) {
      return res.status(400).json({ message: "User already a member" });
    }

    project.members.push(userId);

    await project.save();

    res.json({ message: "Member added successfully", project });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});
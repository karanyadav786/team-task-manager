const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, projectId, assignedTo } = req.body;

    const task = new Task({
      title,
      description,
      project: projectId,
      assignedTo,
    });

    await task.save();

    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

// UPDATE TASK STATUS
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;

    await task.save();

    res.json({ message: "Task updated", task });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET TASKS BY PROJECT
router.get("/project/:projectId", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({
      project: req.params.projectId
    });

    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// DASHBOARD STATS
router.get("/dashboard", authMiddleware, async (req, res) => {
  try {
    const total = await Task.countDocuments();

    const completed = await Task.countDocuments({ status: "done" });

    const inProgress = await Task.countDocuments({ status: "in-progress" });

    const pending = await Task.countDocuments({ status: "todo" });

    res.json({
      total,
      completed,
      inProgress,
      pending
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});
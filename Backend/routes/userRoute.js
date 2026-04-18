const express = require("express");
const router = express.Router();
const Feedback = require("../models/model");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newUser = await Feedback.create(req.body);
    res.json({ message: "Feedback saved successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error saving feedback", error: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const users = await Feedback.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    await Feedback.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
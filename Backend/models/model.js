const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: true },
  batch: String,
  section: String,
  urn: Number,
  feedback: String
});

module.exports = mongoose.model("Feedback", userSchema);
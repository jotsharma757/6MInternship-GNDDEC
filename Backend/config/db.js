const mongoose = require("mongoose");

const Mongo_URI = "mongodb://127.0.0.1:27017/FrontendFeedback";

const connectDB = async () => {
  try {
    await mongoose.connect(Mongo_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
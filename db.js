<<<<<<< HEAD
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "jotsharma143", // ⚠️ same password you set during install
  port: 5432,
});

module.exports = pool;
=======
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/mydatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // no extra options needed
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
>>>>>>> 5a647357115fbd5056d41e229152d87d71689830

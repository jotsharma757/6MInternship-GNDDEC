const connectDB = require("./db");
const User = require("./models/user");

connectDB(); // connect to MongoDB

// Get data from database
const showUsers = async () => {
  try {
    const users = await User.find(); // fetch all documents
    console.log("Users in DB:", users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
  } finally {
    process.exit(0); // close the script
  }
};

showUsers();
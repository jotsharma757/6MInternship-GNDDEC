const express = require("express");
const { seedData } = require("./index"); // Import the seed function

const app = express();

// Run the data storage script as soon as the app starts
seedData();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

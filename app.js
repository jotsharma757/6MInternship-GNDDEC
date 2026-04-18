<<<<<<< HEAD
const express = require('express');
const {Data, users} = require("./JOIN");
 

const app = express();

    Data();
    // users();

 
=======
<<<<<<< HEAD
const express = require("express");
const { seedData } = require("./index"); // Import the seed function

const app = express();

// Run the data storage script as soon as the app starts
seedData();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
=======
<<<<<<< HEAD
const mongoose = require("mongoose");

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/indexDemo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 2. Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// 3. Create Index on email (IMPORTANT)
userSchema.index({ email: 1 });

// 4. Create Model
const User = mongoose.model("User", userSchema);

// 5. Run Example
async function run() {

  // Clear old data
  await User.deleteMany({});

  // Insert sample data
  await User.insertMany([
    { name: "Jot", age: 21, email: "jot@gmail.com" },
    { name: "Aman", age: 25, email: "aman@gmail.com" },
    { name: "Rohit", age: 21, email: "rohit@gmail.com" }
  ]);

  console.log("Data Inserted");

  // 6. Query with explain (to check index usage)
  const result = await User.find({ email: "jot@gmail.com" })
    .explain("executionStats");

  console.log(JSON.stringify(result.executionStats, null, 2));
}
run();
=======
const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {

    // Allow all origins
    res.setHeader("Access-Control-Allow-Origin", "*");

    if(req.url === "/") {
        fs.readFile("data.txt", "utf8", (error, data) => {
            if(error){
                res.end("Error");
            } else{
                res.end("hi");
            }
        });
    }
    else if(req.url === "/aa") {
        fs.readFile("data.txt", "utf8", (error, data) => {
            if(error){
                res.end("Error");
            } else{
                console.log(data);
                
                res.end(data);
            }
        });
    }
    else {
        res.end("Page Not Found");
    }
});

server.listen(4000, () => {
    console.log("server running on http://localhost:4000");
});
>>>>>>> fe2c4863789d1dbcc79fe3203caeff97378433d4
>>>>>>> 5a647357115fbd5056d41e229152d87d71689830
>>>>>>> 45b3345317a95e051b9d5e9e5857cf3a19fcc8bc

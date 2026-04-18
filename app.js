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
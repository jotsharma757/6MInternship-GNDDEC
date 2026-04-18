const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

 app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put("/update/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User Updated");
});
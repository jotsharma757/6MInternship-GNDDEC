const express = require("express");
const app = express();

const user = require("./models/user");
const connectdb = require("./config/db");

connectdb();

app.get('/', (req, res) => {
    res.send("hey");
});

// CREATE
app.get('/create', async (req, res) => {
    let createuser = await user.create({
        name: "Charlei",
        age: 22
    });
    res.send(createuser);
});

// UPDATE
app.get('/update', async (req, res) => {
    let updateuser = await user.findOneAndUpdate(
        { name: "Charlei" },
        { name: "Luci" },
        { new: true }
    );
    res.send(updateuser);
});

// READ
app.get('/read', async (req, res) => {
    let readuser = await user.find();
    res.send(readuser);
});

// DELETE
app.delete('/delete', async (req, res) => {
    let deleteuser = await user.findOneAndDelete({ name: "Luci" });
    res.send(deleteuser);
});

app.listen(5000, () => {
    console.log("Server running on port http://localhost:5000");
});
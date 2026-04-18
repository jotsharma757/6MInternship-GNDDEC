const express = require("express");
const { addUserWithExpense, createTables } = require("./tracker");

const app = express();
app.use(express.json());

// Ensure tables exist when server starts
createTables();

app.post("/users", async (req, res) => {
  const { name, amount, description } = req.body;
  try {
    await addUserWithExpense(name, amount, description);
    res.status(201).send("User and expense added successfully!");
  } catch (err) {
    res.status(500).send("Error adding user and expense.");
  }
});

 
const express = require("express");
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
    // const user = { name: "Jot Sharma", age: 22 }; // example data
    res.render("index")
})

// Start server
app.listen(5173, () => console.log("Server running on port 5173"));c
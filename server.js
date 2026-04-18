const express = require("express");
const cors = require("cors");
require("dotenv").config();

 
const { AllMovies } = require("./model/AllMovies");
const { createUserTable } = require("./model/user");
const { Mylist} = require("./model/MyList")


const authRoutes = require("./routes/authroutes");
const movieRoutes = require("./routes/movieroutes");
const allMoviesRoutes = require("./routes/allmoviesroutes");
const myListroutes = require("./routes/myListroutes");


const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/allmovies", allMoviesRoutes);
app.use("/api/mylist", myListroutes);

// DB setup

createUserTable();
 
AllMovies();
Mylist();

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

 ;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
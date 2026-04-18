const express = require("express");
const router = express.Router();
const { getMoviesByCategory } = require("../model/movie");

// Trending
router.get("/trending", async (req, res) => {
  const movies = await getMoviesByCategory("Trending");
  res.json(movies); // ✅ FIXED
});

// Top Rated
router.get("/top-rated", async (req, res) => {
  const movies = await getMoviesByCategory("TopRated");
  res.json(movies);
});

module.exports = router;
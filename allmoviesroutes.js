const express = require("express");
const router = express.Router();
 
const {
  getMovies,
  getMoviesByCategory,
} = require("../model/AllMovies");

router.get("/", async (req, res) => {
  const movies = await getMovies();
  res.json(movies);
});

router.get("/action", async (req, res) => {
  res.json(await getMoviesByCategory("action"));
});

router.get("/comedy", async (req, res) => {
  res.json(await getMoviesByCategory("comedy"));
});

router.get("/horror", async (req, res) => {
  res.json(await getMoviesByCategory("horror"));
});

router.get("/scifi", async (req, res) => {
  res.json(await getMoviesByCategory("scifi"));
});

module.exports = router;
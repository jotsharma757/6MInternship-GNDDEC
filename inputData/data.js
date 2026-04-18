const {pool} = require("../config/db");
const { insertMovie, connectDB } = require("../model/movie"); // import connectDB also

const Movies = [
  { 
    title: "The Conjuring", 
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", 
    category: "TopRated" 
  },
 
  { 
    title: "Mad Max: Fury Road", 
    image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", 
    category: "TopRated" 
  },
  { 
    title: "John Wick", 
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", 
    category: "TopRated" 
  },
  {
     title: "Avengers: Endgame", 
     image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", 
     category: "TopRated"
     },
  
  {
    title: "Mike & Nick & Nick & Alice (2026)",
    image: "https://tse4.mm.bing.net/th/id/OIP.eSItMXGe8AN27uCsczUMQgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "TopRated",
  },
  {
    title: "Shutterstock",
    image: "https://www.shutterstock.com/search/comedy-movie?dd_referrer=https%3A%2F%2Fwww.google.com%2F",
    category: "TopRated",
  },
    { title: "Dumb and Dumber", image: "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg", category: "TopRated" },
  { title: "The Intern", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", category: "TopRated" },
  { title: "We're the Millers", image: "https://image.tmdb.org/t/p/w500/4pV4jH6aX6y5r6n7s8t9.jpg", category: "TopRated" },
  { title: "Step Brothers", image: "https://image.tmdb.org/t/p/w500/1p9g0b3u6e4n5m2.jpg", category: "TopRated" },
 

  { title: "The Mask", image: "https://image.tmdb.org/t/p/w500/8Wypv9nDdNjXH3U1nWcD9jGq7rV.jpg", category: "Trending" },
  { title: "Superbad", image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", category: "Trending" },
  { title: "Hangover", image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", category: "Trending" },
  { title: "Home Alone", image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg", category: "Trending" },
  { title: "Mr Bean Movie", image: "https://image.tmdb.org/t/p/w500/k8k8lP7lYdExgkt1PyfuzMdGII4.jpg", category: "Trending" },
  { title: "Rush Hour", image: "https://image.tmdb.org/t/p/w500/5x7P9n6Fv0l9t6c4k3n2z.jpg", category: "Trending" },
  { title: "Jumanji", image: "https://image.tmdb.org/t/p/w500/9gLu47oF6kQ6pG5p7h4F3.jpg", category: "Trending" },
  { title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", category: "Trending" },
  { title: "Inception", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", category: "Trending" },
  { title: "Avatar", image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg", category: "Trending" },
  { title: "Night at the Museum", image: "https://image.tmdb.org/t/p/w500/4c8p2n7.jpg", category: "Trending" },
  { title: "Shrek", image: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", category: "Trending" },
  { title: "Minions", image: "https://image.tmdb.org/t/p/w500/dr02bdV6XoP9J8Uo8G9.jpg", category: "Trending" },
  { title: "The Croods", image: "https://image.tmdb.org/t/p/w500/dfh8H.jpg", category: "Trending" },
  { title: "Kung Fu Panda", image: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg", category: "Trending" },

  
  
    
];

const insertAllMovies = async () => {
  try {
    await connectDB(); // ✅ ensure table exists first

    for (let m of Movies) {
      await insertMovie(m.title, m.image, m.category);
    }

    console.log("Movies inserted into PostgreSQL ✅");
    pool.end();
  } catch (err) {
    console.error("Error inserting movies:", err);
  }
};

insertAllMovies();
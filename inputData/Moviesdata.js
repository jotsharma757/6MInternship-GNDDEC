require("dotenv").config();
const { pool } = require("../config/db");

const { AllMovies, insertAllMovie } = require("../model/AllMovies");
console.log("Running FullMovies...");
const AllDataMovies = [

  // 🔥 ACTION (20)
  { title: "Mad Max: Fury Road", image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", category: "action" },
  { title: "John Wick", image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", category: "action" },
  { title: "Avengers: Endgame", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", category: "action" },
  { title: "Gladiator", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", category: "action" },
  { title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", category: "action" },
  { title: "Extraction", image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", category: "action" },
  { title: "Fast & Furious 7", image: "https://image.tmdb.org/t/p/w500/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg", category: "action" },
  { title: "Black Panther", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", category: "action" },
  { title: "Thor: Ragnarok", image: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", category: "action" },
  { title: "Captain America: Civil War", image: "https://image.tmdb.org/t/p/w500/kSBXou5Ac7vEqKd97wotJumyJvU.jpg", category: "action" },
  { title: "Iron Man", image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", category: "action" },
  { title: "The Matrix", image: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg", category: "action" },
  { title: "300", image: "https://image.tmdb.org/t/p/w500/9W49fyG7pR0V0fI1r8D4b2W2d6R.jpg", category: "action" },
  { title: "Logan", image: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg", category: "action" },
  { title: "Deadpool", image: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg", category: "action" },
  { title: "Mission Impossible Fallout", image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", category: "action" },
  { title: "Skyfall", image: "https://image.tmdb.org/t/p/w500/d0FV0J9xk8w9KXQ3c7u0J6t9n7U.jpg", category: "action" },
  { title: "Tenet", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg", category: "action" },
  { title: "The Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", category: "action" },
  { title: "Spider-Man: No Way Home", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", category: "action" },

  // 👻 HORROR (20)
  { title: "The Conjuring", image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", category: "horror" },
  { title: "Annabelle", image: "https://image.tmdb.org/t/p/w500/yAg0kXj8nNn7O2g7pZ6s9I0xZpF.jpg", category: "horror" },
  { title: "The Nun", image: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg", category: "horror" },
  { title: "Insidious", image: "https://image.tmdb.org/t/p/w500/1eg7YqF6Qy3x9Mpfu5lHhHn0SI.jpg", category: "horror" },
  { title: "It", image: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", category: "horror" },
  { title: "The Exorcist", image: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg", category: "horror" },
  { title: "Hereditary", image: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg", category: "horror" },
  { title: "Smile", image: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg", category: "horror" },
  
  { title: "A Quiet Place", image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", category: "horror" },
  { title: "The Invisible Man", image: "https://image.tmdb.org/t/p/w500/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg", category: "horror" },
  { title: "The Visit", image: "https://image.tmdb.org/t/p/w500/3c9g3hP9u6K4f5k9j3M0v6Q.jpg", category: "horror" },
  { title: "Paranormal Activity", image: "https://image.tmdb.org/t/p/w500/9QYz2k2l7z5m5k8Z1v6b4n3.jpg", category: "horror" },
  { title: "The Others", image: "https://image.tmdb.org/t/p/w500/9bT3yq8G6s5v4f3d2c1b0a.jpg", category: "horror" },

  // 😂 COMEDY (20)
  { title: "The Mask", image: "https://image.tmdb.org/t/p/w500/8Wypv9nDdNjXH3U1nWcD9jGq7rV.jpg", category: "comedy" },
  { title: "Superbad", image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", category: "comedy" },
  { title: "Hangover", image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", category: "comedy" },
  { title: "Home Alone", image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg", category: "comedy" },
  { title: "Mr Bean Movie", image: "https://image.tmdb.org/t/p/w500/k8k8lP7lYdExgkt1PyfuzMdGII4.jpg", category: "comedy" },
  { title: "Rush Hour", image: "https://image.tmdb.org/t/p/w500/5x7P9n6Fv0l9t6c4k3n2z.jpg", category: "comedy" },
  { title: "Jumanji", image: "https://image.tmdb.org/t/p/w500/9gLu47oF6kQ6pG5p7h4F3.jpg", category: "comedy" },
  { title: "Ted", image: "https://image.tmdb.org/t/p/w500/osJNr64r6rZBtZg1Yf7L2.jpg", category: "comedy" },
  { title: "Dumb and Dumber", image: "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg", category: "comedy" },
  { title: "The Intern", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", category: "comedy" },
  { title: "We're the Millers", image: "https://image.tmdb.org/t/p/w500/4pV4jH6aX6y5r6n7s8t9.jpg", category: "comedy" },
  { title: "Step Brothers", image: "https://image.tmdb.org/t/p/w500/1p9g0b3u6e4n5m2.jpg", category: "comedy" },
  { title: "Yes Man", image: "https://image.tmdb.org/t/p/w500/2kF7p3h8m9n6.jpg", category: "comedy" },
  { title: "Bruce Almighty", image: "https://image.tmdb.org/t/p/w500/3Y0X8k1d.jpg", category: "comedy" },
  { title: "The Proposal", image: "https://image.tmdb.org/t/p/w500/aRk3k9p8.jpg", category: "comedy" },
  { title: "Night at the Museum", image: "https://image.tmdb.org/t/p/w500/4c8p2n7.jpg", category: "comedy" },
  { title: "Shrek", image: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", category: "comedy" },
  { title: "Minions", image: "https://image.tmdb.org/t/p/w500/dr02bdV6XoP9J8Uo8G9.jpg", category: "comedy" },
  { title: "The Croods", image: "https://image.tmdb.org/t/p/w500/dfh8H.jpg", category: "comedy" },
  { title: "Kung Fu Panda", image: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg", category: "comedy" },

  // 🚀
  { title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", category: "sci-fiction" },
  { title: "Inception", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", category: "sci-fiction" },
  { title: "Avatar", image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg", category: "sci-fiction" },
  { title: "The Matrix", image: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg", category: "sci-fiction" },
  { title: "Gravity", image: "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg", category: "sci-fiction" },
  { title: "Dune", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", category: "sci-fiction" },
  { title: "Blade Runner 2049", image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", category: "sci-fiction" },
  { title: "The Martian", image: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg", category: "sci-fiction" },
  { title: "Arrival", image: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", category: "sci-fiction" },
  { title: "Edge of Tomorrow", image: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg", category: "sci-fiction" },
  { title: "Elysium", image: "https://image.tmdb.org/t/p/w500/7m6YF0v.jpg", category: "sci-fiction" },
  { title: "Oblivion", image: "https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg", category: "sci-fiction" },
  { title: "Passengers", image: "https://image.tmdb.org/t/p/w500/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg", category: "sci-fiction" },
  { title: "Lucy", image: "https://image.tmdb.org/t/p/w500/rwn876MeqienhOVSSjtUPnwxn0Z.jpg", category: "sci-fiction" },
  { title: "Chappie", image: "https://image.tmdb.org/t/p/w500/saF3HtAduvrP9ytXDxSnQJP3G.jpg", category: "sci-fiction" },
  { title: "Tron Legacy", image: "https://image.tmdb.org/t/p/w500/vllkyhB4b6hX2b9d.jpg", category: "sci-fiction" },
  { title: "Transformers", image: "https://image.tmdb.org/t/p/w500/6eezF9x9.jpg", category: "sci-fiction" },
  { title: "Ready Player One", image: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg", category: "sci-fiction" },
  { title: "Alita Battle Angel", image: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg", category: "sci-fiction" },
  { title: "Pacific Rim", image: "https://image.tmdb.org/t/p/w500/mmznhaQDwlHWpUwKuNxtQiubbmM.jpg", category: "sci-fiction" },


];

const FullMovies= async () => { //function
  try {
    await AllMovies();//table

   for (let m of AllDataMovies) {
  console.log("Inserting:", m.title);
  await insertAllMovie(m.title, m.image, m.category); // ✅ correct
}
    console.log("AllDataMovies inserted ✅");
    
  } catch (err) {
    console.error("Error inserting movies : ", err);
  }
};

FullMovies();

 
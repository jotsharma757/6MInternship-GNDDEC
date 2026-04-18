import { useEffect, useState } from "react";
import { fetchAllMovies } from "../Services/api";
import AllMoviesRow from "../Components/AllMoviesRow";
import Navbar from "../Components/navbar";


function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

 const fetchMovies = async () => {
  try {
    const res = await fetchAllMovies();
    console.log(res.data);
    setMovies(res.data);
  } catch (err) {
    console.log("Error fetching movies", err);
  }
};

  const action = movies.filter(m => m.category?.toLowerCase() === "action");
  const comedy = movies.filter(m => m.category?.toLowerCase() === "comedy");
  const horror = movies.filter(m => m.category?.toLowerCase() === "horror"); 
  const scifi = movies.filter(m => m.category?.toLowerCase() === "sci-fiction");
  return (
    <>
      <Navbar />

      <div className="main-content">
        <h2>All Movies</h2>

        <AllMoviesRow title="action" movies={action} />
        <AllMoviesRow title="comedy" movies={comedy} />
        <AllMoviesRow title="horror" movies={horror} />
        <AllMoviesRow title="scifi" movies={scifi} />
      </div>
    </>
  );
}

export default Movies;
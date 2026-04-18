import React from "react";
import AllMoviesCard from "./AllMoviesCard";
import "../App.css";
function AllMoviesRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      
        <div className="row-posters">
            {movies?.map((movie) => (
                <AllMoviesCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  );
}

export default AllMoviesRow;
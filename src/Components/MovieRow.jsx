import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h2>{title}</h2>

     < div className="row-posters">  
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
}

export default MovieRow;
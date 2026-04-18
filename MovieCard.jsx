import React from "react";

function MovieCard({ movie }) {
  
  // ✅ condition: if no image OR no title → don't render
  if (!movie.image || !movie.title) {
    return null;
  }

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;




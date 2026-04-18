import React, { useState } from "react";
import { addMylist, deleteMylist } from "../Services/api";

function AllMoviesCard({ movie }) {
  const [fav, setFav] = useState(false);
  const [id, setId] = useState(null); // for delete

  const handleMylist = async () => {
    try {
      if (!fav) {
        // ADD
        const res = await addMylist({
          title: movie.title,
          image: movie.image,
        })
        setId(res.data.id);
        setFav(true);

      } else {
        // REMOVE
        await deleteMylist(id);
        setFav(false);
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>

      <button onClick={handleMylist}>
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default AllMoviesCard;
import { useEffect, useState } from "react";
import { getMylist, deleteMylist } from "../Services/api";

function Mylist(){
    const [list, setlist] = useState([]);

    useEffect(() => {
        loadMylist();
    },[]);

    const loadMylist = async () => {
        const res = await getMylist();
        setlist(res.data);
    };

    const removeMovie = async (id) => {
        await deleteMylist(id);
        loadMylist();
    };

    return(
        <div className="grid">
            {
                list.map((movie) =>(
                    <div className="card" key={movie.id}>
                        <img src= {movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>

                        <button onClick={() => removeMovie(movie.id)}>
                            Remove
                        </button>
                    </div>
                ))}

        </div>
    );
}

export default Mylist;
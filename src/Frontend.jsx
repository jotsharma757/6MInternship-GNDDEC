import React from "react";
import { useEffect,useState } from "react";

function Frontend(){
    const [page, setPage]= useState("")

    useEffect(() => {
        fetch("http://localhost:4000/api/hello")
        .then((res) => res.json())
        .then((result) => {
            setPage(result.message);
        })
    },[])


return(
    <div>
        <h3>Frontend</h3>
        <p>{page}</p>
    </div>
)
}
export default Frontend;
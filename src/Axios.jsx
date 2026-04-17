import React, { useEffect, useState } from "react";
import Axios from "axios";

function UAxios (){
const [users, setusers] = useState([])
const [error, seterror] = useState("")

useEffect(()=> {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        setusers(res.data);
     })
     .catch(() => {
        seterror("Failed to fetch data");
     });
}, []);
return(
    <div>
        <h2>User List</h2>
        {error && <p>{error}</p>}

        {users.map((user) => (
            <p key = {user.id}>
                {user.name} - {user.email}
            </p>
        ))}
    </div>
);
} 
export default UAxios;
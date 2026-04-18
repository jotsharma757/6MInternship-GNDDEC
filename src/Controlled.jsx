import React, { useState } from "react";

function Controlled(){
    const[name, Showname] = useState("");
    return(
        <div>
            <input type="text" 
            placeholder="Type"
            value={name}
            onChange={(e) => Showname(e.target.value)}/>
            <p>Your name is {name}</p>
     </div>
    )
}
export default Controlled;
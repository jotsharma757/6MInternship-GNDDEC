import { useState, useEffect } from "react";

function Input(){
    const[input, setName] = useState("");
    const[inputs, setNames] = useState([]);

    useEffect(() => {
    console.log("Name changed to:", input); 
  }, [inputs] );  //d

    return(
        <div>
            
            <input
            type="text"
            value = {input}
            placeholder="Type Name"
            onChange={(e) => setName(e.target.value)}
            />
  
            
             <button onClick={() => { setNames([...inputs, input]);
             setName(""); }}>Add</button>
           <p>{inputs.join("")} </p>
           
        </div>
    );
}
export default Input;
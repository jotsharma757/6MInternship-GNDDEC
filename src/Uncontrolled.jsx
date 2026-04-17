import React, { useRef } from "react";
 
function Uncontrolled(){
    const nameref = useRef();
    const handleSubmit= () => {
        console.log(nameref.current.value);    
    };
    return(
        <div>
            <input type="text"
            placeholder="typeeeeee"
            ref={nameref} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Uncontrolled;
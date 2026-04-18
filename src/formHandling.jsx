import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your name is " + name)
        //  window.location.reload();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <button type="Submit">Submit</button>
        </form>
    )
}
export default Form;
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5173/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: name })
            });

            const data = await res.text();
            setResponse(data);

        } catch (error) {
            setResponse("Server error");
        }
    };

    return (
        <div>
            <h2>Enter Name</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br />
                <button type="submit">Submit</button>
            </form>

            <h3>{response}</h3>
        </div>
    );
}

export default Form;
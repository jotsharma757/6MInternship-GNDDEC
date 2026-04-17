import { useEffect, useState, useRef } from "react";

function State() {
    const [show, setName] = useState("");
    const [shows, setNames] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    
    function addTask() {
        setNames([...shows, show]);
        setName("");
    }

    function deleteTask(index) {
        const newShows = shows.filter((_, i) => i !== index);
        setNames(newShows);
    }
    useEffect(() => {
        console.log("Tasks:", shows);
    }, [shows]);


    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter the task"
                value={show}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addTask}>Add</button>
            <h3>Total Tasks : {shows.length}</h3>

            {shows.map((t, i) => (
                <div key={i}>
                    {t}
                    <button onClick={() => deleteTask(i)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default State;
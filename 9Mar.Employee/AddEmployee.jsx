import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function AddEmployee() {
    const { addEmployee } = useContext(EmployeeContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleAdd = () => {
        addEmployee({ name, age, email });
        setName(""); setAge(""); setEmail("");
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
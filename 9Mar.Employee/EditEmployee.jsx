import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EditEmployee() {
    const { employees, editEmployee } = useContext(EmployeeContext);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleEdit = () => {
        editEmployee(Number(id), { name, age, email });
        setId(""); setName(""); setAge(""); setEmail("");
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <input placeholder="Employee ID" value={id} onChange={e => setId(e.target.value)} />
            <input placeholder="New Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="New Age" value={age} onChange={e => setAge(e.target.value)} />
            <input placeholder="New Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleEdit}>Edit</button>
            <div>
                <h4>Current Employees:</h4>
                {employees.map(emp => (
                    <div key={emp.id}>{emp.id} - {emp.name}</div>
                ))}
            </div>
        </div>
    );
}
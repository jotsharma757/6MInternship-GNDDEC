import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeList() {
    const { employees, deleteEmployee } = useContext(EmployeeContext);

    return (
        <div>
            <h2>Employee List</h2>
            {employees.map((emp) => (
                <div key={emp.id}>
                    {emp.name} - {emp.age} - {emp.email}
                    <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
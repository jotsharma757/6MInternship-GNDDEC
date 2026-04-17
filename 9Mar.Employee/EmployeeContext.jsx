import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
    console.log(children);
    
    const [employees, setEmployees] = useState([
        { id: 1, name: "John", age: 30, email: "john@example.com" },
        { id: 2, name: "Alice", age: 25, email: "alice@example.com" }
    ]);

    const addEmployee = (emp) => {
        const id = employees.length + 1;
        setEmployees([...employees, { ...emp, id }]);
    };


    const editEmployee = (id, updated) =>
        setEmployees(employees.map(emp => emp.id === id ? { ...emp, ...updated } : emp));

    const deleteEmployee = (id) => setEmployees(employees.filter(emp => emp.id !== id));

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
}
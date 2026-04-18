import React, { useState } from "react";

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selected ? selected : "Select an option"}
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
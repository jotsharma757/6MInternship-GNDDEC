import React, { useState } from "react";
import logo from "../assets/netflix.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/movies")}>Movies</li>
        <li onClick={() => navigate("/my-list")}>My list</li>

        {/* 👇 Profile Section */}
        <li
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "8px" }}
        >
          {/* 👇 Profile Icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            style={{ width: "30px", borderRadius: "50%" }}
          />

          {/* 👇 User Name */}
          <span>{user?.name || "User"}</span>

          {/* 👇 Dropdown */}
          {open && (
            <div className="dropdown">
              <p>{user?.name}</p>
              <p>{user?.email}</p>

              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
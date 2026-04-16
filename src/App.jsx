// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 import User from "./user";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Users List</h1>
        <Link to="/user/1">User 1</Link> |{" "}
        <Link to="/user/2">User 2</Link>

        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
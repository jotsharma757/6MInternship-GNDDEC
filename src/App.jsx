import React from "react";
import Navbar from "./Components/navbar";
import Register from "./Pages/register";
import Login from "./Pages/login";
import HomePage from "./Pages/Home";
import Movies from "./Pages/AllMovies";
import Mylist from "./Pages/myList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />

        <Route path="/movies" element={<Movies />} />
        <Route
          path="/my-list"
          element={
            <>
              <Navbar />
              <Mylist />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;











<<<<<<< HEAD
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
=======
<<<<<<< HEAD
const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome Jot Sharma!</h1>
      <p>Your age is 22</p>
    </div>
  );
};

export default App;   // Must have default export for main.jsx
=======
<<<<<<< HEAD
 import React from "react";
 import Form from "./form";

 function App(){
  return(
    <Form/>
  )
 }
 export default App;
=======
<<<<<<< HEAD
 import React from "react";
 import Frontend from "./Frontend";
 function App(){
  return(
    <Frontend/>
  )
 }
 export default App;
=======
<<<<<<< HEAD
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/aa");
        const text = await response.text(); // <-- important!
        setData(text);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data); // will print the file content
  }, [data]);

  return (
    <>
      <h1>Data from Node.js:</h1>
      <p>{data}</p>
    </>
>>>>>>> f00716b219dda3753bfb549e70257a8dd70e7a4d
  );
}

export default App;
<<<<<<< HEAD










=======
=======
import Child from "./ReactMemo";
import Parent from "./ParentMemo";
import SuspenseP from "./Suspense";
import  Dropdown from "./Suspense";
 function App(){
  return(
    // <SuspenseP/>
    <Dropdown/>
    // <Parent/>
  )
 }
 export default App
 
 
>>>>>>> d6335a118e53fc2eb34b62c8bf495820f5718ff3
>>>>>>> 15d99047d900984c2b08b31d1332ccd68fc457aa
>>>>>>> a6e92165fd0aadb9284983c3f0de58681037f5f3
>>>>>>> 0856593aea8e67b0e281a285fc8b7262d9b6c40b
>>>>>>> f00716b219dda3753bfb549e70257a8dd70e7a4d

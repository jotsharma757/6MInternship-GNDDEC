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
  );
}

export default App;
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

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home(){
    return <h1>Home Page</h1>
}
function Student (){
    return <h1>Student Page</h1>
}
function List(){
    return <h1>Student List</h1>
}
function Practice(){
    return(
    <BrowserRouter> 
    <h1>Welcome To Student Portal</h1>
    <nav>
    <Link to = "/">Home</Link>
      <Link to = "/Student">Student</Link>
        <Link to = "/List">List</Link>
    </nav>

    <Routes>             
        <Route path="/" element = {<Home/>}/>
        <Route path="/student" element = {<Student/>}/>
        <Route path="/list" element = {<List/>}/>
    </Routes>
    
    </BrowserRouter>
    );
}
export default Practice;
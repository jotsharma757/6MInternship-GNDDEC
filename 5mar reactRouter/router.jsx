import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h1>Home Page</h1>
}
function About() {
    return <h1>About Page</h1>
}

function Router() {
    return (
        <BrowserRouter>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}

            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        </BrowserRouter>
    );

}
export default Router;
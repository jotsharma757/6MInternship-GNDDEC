import React, { useState } from "react";
// import { setToken } from "../services/auth";

function Login({ setIsLoggedin, setpage }) {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
      setIsLoggedin(true);
    } else {
      alert("wrong details");
    }
  };

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handlelogin}>
        <input type="email"
          onChange={(e) => setmail(e.target.value)}
          placeholder="Type email"/>
        <br/>
        <br />

        <input type="Password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Type password"/>
        <br />

        <button type="submit">Login</button>

        <p onClick={() => setpage("signup")}>Go to SignUp</p>
      </form>
    </div>
  );
}

export default Login;
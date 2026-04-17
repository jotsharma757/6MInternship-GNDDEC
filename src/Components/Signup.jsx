import React, { useState } from "react";

function SignUp({ setpage }) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({ email, password }))
        alert("Success")
        setpage("login");

    };

    return (
        <div>
            <h3>SignUp </h3>

            <form onSubmit={(handleSignUp)}>
                <input type="email"
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Type Email"
                />
                <br />
                <input type="Password"
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Type Password" />
                <br />
                <button type="submit">Login</button>
                <p onClick={() => setpage("login")}>Go to Login</p>
            </form>
        </div>
    )
}
export default SignUp;
import { useState } from "react";
import { loginUser } from "../Services/api";
import { useNavigate } from "react-router-dom";
import logo from "../assets/netflix.png";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");
    console.log("Form data:", form);

    try {
      const res = await loginUser(form);

      console.log("API response:", res.data);

      if (res.data.token) {
        // store token (optional)
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);

        // 🔥 allow access to home ONLY once
        sessionStorage.setItem("allowHome", "true");

        console.log("Login success → navigating to /home");

        navigate("/home");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="section">
      <div className="bg"></div>

      {/* Navbar */}
      <div className="nav">
        <img src={logo} alt="logo" />
        <ul>
          <li onClick={() => navigate("/register")}>Sign Up</li>
        </ul>
      </div>

      {/* Login Form */}
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
import { useState } from "react";
import { registerUser } from "../Services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(form);
      alert(res.data.message);
      if (res.status === 201 || res.status === 200) {
        navigate("/login");
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Sign Up failed"
      );
    }
  };

  return (
    <div className="section">
      <div className="bg"></div>
      
    <div>
      

 <form autoComplete="off" onSubmit={handleSubmit}>
  <h2>Sign Up</h2>
  <input
    placeholder="Name"
    required
    autoComplete="off"
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
  />

  <input
    placeholder="Type your email"
    required
    autoComplete="new-email"
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
  />

  <input
    type="password"
    placeholder="Password"
    required
    autoComplete="new-password"
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
  />

  <button type="submit">SignUp</button>

</form>
    </div>
    </div>
  );
}

export default Register;

 
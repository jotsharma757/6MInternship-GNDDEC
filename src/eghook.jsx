import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]); // store all users
    reset(); // clear fields
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          {...register("username", { required: "Username is required" })}
          placeholder="Enter Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <br />

        <input
          type="password"
          {...register("password", {required: "Password is required",
            minLength: { value: 4, message: "Min 4 characters" }
          })}
          placeholder="Enter Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <br />

        <button type="submit">Login</button>
      </form>

      <h3>Users List:</h3>
      {users.map((u, index) => (
        <p key={index}>
          {u.username} - {u.password}
        </p>
      ))}
    </>
  );
}

export default LoginForm;
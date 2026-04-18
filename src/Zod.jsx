import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🧠 Step 1: Create schema (rules)
const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("username")} placeholder="Enter Username" />
      {errors.username && <p>{errors.username.message}</p>}

      <br />

      <input type="password" {...register("password")} placeholder="Enter Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
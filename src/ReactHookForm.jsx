import React from "react";
import { useForm } from "react-hook-form";

function ReactHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully ✅");
    console.log(data);
  };

  const onError = (errors) => {
    if (errors.name) {
      alert(errors.name.message);
    } else if (errors.email) {
      alert(errors.email.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        placeholder="Enter Name"
      />
      <br />

      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Enter Email"
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHook;
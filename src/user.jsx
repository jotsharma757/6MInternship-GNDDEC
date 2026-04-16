 
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // grabs the :id from URL
  return <h2>Showing user with ID: {id}</h2>;
}

export default User;
import React from "react";
function DataProvider({ render }) {
  const name = "Jot";

  return render(name);
}
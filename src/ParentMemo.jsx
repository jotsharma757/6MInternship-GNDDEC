import React, { useState } from "react";
import Child from "./ReactMemo";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child name="Jot" />
    </>
  );
}

export default Parent;
// import { useContext } from "react";
// import { CountContext } from "./CountContext";
function Counter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
// import { useContext } from "react"; 
// import { CountContext } from "./CountContext";
function Decrease({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Decrease;
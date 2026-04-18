import { useState , useEffect } from "react";
import Counter from "./inc";
import Decrease from "./decrease";
// import {countContext} from "react";

function State() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Count Number is :", count)
  })

  return (
    <>
      <h3>State: {count}</h3>
        <Counter count={count} setCount={setCount} />
        <Decrease count={count} setCount={setCount} />
    </>
  );
}
export default State;
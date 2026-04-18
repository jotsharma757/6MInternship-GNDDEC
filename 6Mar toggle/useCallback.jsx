import { useState, useCallback, useEffect} from "react";

function Callback() {
  const [count, setCount] = useState(0);

useEffect(()=>{
    console.log("Count is : ")
})

  // remember this function
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]); // only change if count changes

  return <button onClick={add}>Count: {count}</button>;
}
export default Callback;
import { useRef } from "react";

function Ref() {
  const number = useRef(0);

  function increase() {
    number.current = number.current + 1;
    console.log(number.current);
  }

  return <button onClick={increase}>Click</button>;
}
export default Ref;
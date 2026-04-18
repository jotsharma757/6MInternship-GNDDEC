import { useState, useMemo } from "react";

function Memo() {
  const [num, setNum] = useState(1);

  const square = useMemo(() => {
    return num * num;
  }, [num]);

  return (
    <div>
      <p>Square: {square}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}
export default Memo;
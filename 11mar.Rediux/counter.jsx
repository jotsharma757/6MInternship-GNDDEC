import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

function Counter() {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Add
      </button>

    </div>
  );
}

export default Counter;
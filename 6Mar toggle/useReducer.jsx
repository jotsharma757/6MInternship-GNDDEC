import React, { useReducer } from "react";

function Reducer(state, action) {
    if (action === "increment") {
        return state + 1;
    } else if (action === "decrement") {
        return state - 1;
    } else if (action === "reset") {
        return 0
    } else {
        return state;
    }
}

function Counter() {
    const [count, setCount] = useReducer(Reducer, 0);

    return (
        <div>
            <h4>count : {count}</h4>
            <button onClick={() => setCount("increment")}>+</button>
            <button onClick={() => setCount("decrement")}>-</button>
            <button onClick={() => setCount("reset")}>Reset</button>
        </div>
    )
}
export default Counter;
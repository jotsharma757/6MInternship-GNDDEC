import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./toDo";

function Task(){
    const count = useSelector((state) => state.task.count);
    const dispatch = add();

    return(
        <div>
            <h1>Total Task : {count}</h1>
            <button onClick={() => dispatch(addTask())}>ADD Task</button>
        </div>
    );
}
export default Task;
import {createSlice} from "@reduxjs/toolkit";
// import { addTask } from "./Task";

const ToDoSlice = createSlice({
    name : "ToDo",
    initialState: { count: 0},

    reducers: {
        addTask: (state) => {
            state.count +=1;
        }
    }
});

export const {addTask} = ToDoSlice.actions;
export default ToDoSlice.reducer;
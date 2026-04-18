import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./toDo";

export const store = configureStore({
    reducer:{
        task: ToDoReducer,
    }
});
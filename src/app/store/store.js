import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../feature/counter/counterSlice";
import usernameSlice from "../../feature/username/usernameSlice";
import todosSlice from "../../feature/todos/todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        name: usernameSlice,
        todos: todosSlice,
    },
});

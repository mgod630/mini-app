import { createSlice } from "@reduxjs/toolkit";

let initialState = localStorage.getItem("todos");
export const todosSlice = createSlice({
    name: "todos",
    initialState: { value: initialState },
    reducers: {
        addTodo(state) {
            console.log(state.value);
            // state.value = action.payload;
            // console.log(state.value);
            // localStorage.setItem("todos", state.value);
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;

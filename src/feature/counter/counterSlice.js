import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0);
}
let initialState = parseInt(localStorage.getItem("counter"));
export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: initialState },
    reducers: {
        increment(state) {
            state.value += 1;
            localStorage.setItem("counter", state.value);
        },
        decrement(state) {
            state.value -= 1;
            localStorage.setItem("counter", state.value);
        },
        incrementByValue(state, action) {
            state.value += action.payload;
            localStorage.setItem("counter", state.value);
        },
    },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("username")) {
    localStorage.setItem("username", "user");
}
let initialState = localStorage.getItem("username");
export const usernameSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        editUsername(state, action) {
            state.value = action.payload;
            localStorage.setItem("username", state.value);
        },
    },
});

export const { editUsername } = usernameSlice.actions;

export default usernameSlice.reducer;

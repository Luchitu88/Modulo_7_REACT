import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    module: 'React Mod 7',
    username: '',
    email: '',
    password: 'mod7USIP-LuisIturricha',
};

const formSlice = createSlice({
    name: 'form', // Este nombre debe coincidir con el acceso en el store
    initialState,
    reducers: {
        setModule: (state, action) => {
            state.module = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setModule, setUsername, setEmail, setPassword } = formSlice.actions;
export default formSlice.reducer;
export { initialState };
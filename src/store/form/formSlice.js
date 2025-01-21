import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    module: 'React Mod 7',
    username: '',
    email: '',
    password: 'mod7USIP-LuisIturricha',
};

const formSlice = createSlice({
    name: 'form',
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
        resetForm: (state, action) => {
            console.log("Payload recibido en resetForm:", action.payload); 
            console.log("Estado antes del reset:", { ...state }); 
        
            if (action.payload === "logout") {
                const resetState = {
                    module: '',
                    username: '',
                    email: '',
                    password: '',
                };
                console.log("Estado después del reset (logout):", resetState); 
                return resetState;
            }
        
            console.log("Estado después del reset (initialState):", initialState); 
            return { ...initialState };
        },
    },
});

export const { setModule, setUsername, setEmail, setPassword, resetForm } = formSlice.actions;
export default formSlice.reducer;
export { initialState };
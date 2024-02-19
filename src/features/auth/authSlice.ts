import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

interface Auth {
    token: String,
}

const initialState: Auth = {
    token: "",
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        logOut: (state, action) => {
            storage.removeItem('persist:root')
        }
    }
})

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;
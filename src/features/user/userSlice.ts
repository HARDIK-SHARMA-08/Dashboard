"use client"
import { createSlice } from '@reduxjs/toolkit';

interface User {
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    phoneNumber: Number,
    currAddress: String,
    permaAddress: String,
    email: String,
    gender: String,
}

const initialState: User = {
    firstname: "",
    lastname: "",
    age: 0,
    password: "",
    phoneNumber: 0,
    currAddress: "",
    permaAddress: "",
    email: "",
    gender: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        deleteUser: (state, action) => {
            return initialState
        },
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

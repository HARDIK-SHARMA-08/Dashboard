"use client"
import { createSlice } from "@reduxjs/toolkit"

interface Student {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    phoneNumber: number,
    currAddress: string,
    permaAddress: string,
    email: string,
    gender: string,
}

const initialState = {
    students: [] as Student[]
}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            let newStudent = {
                id: Math.random(),
                ...action.payload
            }
            state.students.push(newStudent)
        },
        updateStudent: (state, action) => {
            let { students } = state;
            state.students = students.map((student) =>
                student.id === action.payload.id ? { ...student, ...action.payload } : student);
        }
    }
})

export const { addStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
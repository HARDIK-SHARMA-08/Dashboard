import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide First Name"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide Last Name"],
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a valid Password"],
        unique: true
    },
    currAddress: {
        type: String,
    },
    permaAddress: {
        type: String,
    },
    age: {
        type: Number,
    },
    phoneNumber: {
        type: Number,
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;
'use server'
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB is connected");
        })

        connection.on("error", (error) => {
            console.log("MongoDB is not connected ", error);
        })
    } catch (error) {
        console.log("Something went wrong ", error);
    }
}
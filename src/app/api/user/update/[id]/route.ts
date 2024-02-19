//Updating User
import { connect } from '@/dbConfig/dbConfig'
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest, route: { params: { id: string } }) {
    try {
        const req = await request.json()
        const { firstname, lastname, email, gender, age, phoneNumber, currAddress, permaAddress } = req;

        const id: string = route.params.id;

        // Check if user exists
        const user = await User.findById(id);
        
        if (!user) {
            throw new Error('User not found.');
        }

        //Check if user exist
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname,
            lastname,
            email,
            gender,
            age,
            phoneNumber,
            currAddress,
            permaAddress,
        }, { new: true });

        console.log("User Updated::", updatedUser);

        return NextResponse.json({
            message: "User updated successfully",
            success: true,
            updatedUser
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
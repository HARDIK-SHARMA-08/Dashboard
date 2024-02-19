import { connect } from '@/dbConfig/dbConfig'
import User from '@/model/user.model'
import bcryptjs from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        const { firstname, lastname, email, password, gender, age, phoneNumber, currAddress, permaAddress } = req;

        //Check if user already exist
        const user = User.findOne({ email })
        if (!user) return NextResponse.json({ error: "User already exists" }, { status: 404 })

        //Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            firstname,
            lastname,
            email,
            gender,
            age,
            phoneNumber,
            currAddress,
            permaAddress,
            password: hashedPassword
        })

        //Create new user
        const savedUser = await newUser.save();
        console.log("User Saved::", savedUser);

        return NextResponse.json({
            message: "Token not blacklisted",
            success: true,
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}



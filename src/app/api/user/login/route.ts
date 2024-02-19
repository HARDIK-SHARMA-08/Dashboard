import User from '@/model/user.model';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { connect } from "@/dbConfig/dbConfig"

connect();

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const req = await request.json()
        const { email, password } = req;
        console.log("Login Body::", req);

        //Check if user already exists
        const user = await User.findOne({ email })
        if (!user) return NextResponse.json({ error: "User does not exists" }, { status: 401 })
        console.log("User Exists::", user);

        //Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) return NextResponse.json({ error: "Password invalid" }, { status: 401 })
        console.log("Valid Password::", user.password);


        //json web Token creation
        const payload = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            gender: user.gender,
            phoneNumber: user.phoneNumber,
            currAddress: user.currAddress,
            permaAddress: user.permaAddress,
            email: user.email,
            role: user.role,
        }

        const token = jwt.sign(
            payload,
            process.env.SECRET_KEY!,
            {
                expiresIn: '1d'
            }
        )

        console.log("Token Created::", token);

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
            token,
            payload,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        // response.headers.set('Authorization', `Bearer ${token}`);

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

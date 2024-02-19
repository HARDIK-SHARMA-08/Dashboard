import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import Token from "@/model/token.model";

connect();

export async function POST(request: NextRequest) {
    try {
        const blacklistToken = cookies().get('token')?.value
        console.log("Token to be Blacklisted::", blacklistToken);

        if (!blacklistToken) {
            throw new Error("Token not found in cookies");
        }

        const newBlacklistToken = await new Token({
            token: blacklistToken
        })

        console.log("Token::", newBlacklistToken);


        const saveBlacklistToken = await newBlacklistToken.save();
        console.log("Token Blacklisted::", saveBlacklistToken);


        // Delete the token cookie to log out the user
        cookies().delete('token');

        // Redirect the user to the home page after logout
        NextResponse.redirect(new URL('/', request.url));

        // Respond with a JSON indicating successful logout
        return NextResponse.json({
            message: "Logged out successfully",
            success: true,
        });
    } catch (error: any) {
        // If an error occurs, return a JSON response with an error message and status code 500
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

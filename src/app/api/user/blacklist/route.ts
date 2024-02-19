import { connect } from '@/dbConfig/dbConfig'
import Token from '@/model/token.model';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const { tokenCookie } = req;
        console.log("Blacklist Body Request::", req);

        const blacklistToken = await Token.findOne({ token: tokenCookie })
        console.log("blacklistedToken::", blacklistToken);

        if (blacklistToken) {
            return NextResponse.json({
                error: "Unauthorized User",
                message: "You are Unauthorized",
                success: false,
                blacklistToken,
            }, { status: 401 });
        }
        
        else {
            return NextResponse.json({
                message: "Authorized User",
                success: true,
                blacklistToken,
            }, { status: 200 }
            )
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}



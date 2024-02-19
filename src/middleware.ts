import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

export const config = {
  matcher: ['/profile', '/student', '/studentProfile/:id'],
}

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.SECRET_KEY),
}

const verifyToken = async (request: NextRequest) => {
  try {
    const tokenCookie = request.cookies?.get('token')?.value.toString();

    if (!tokenCookie) {
      return console.log("No JWT Found");
    }

    const blacklistURL = `http://localhost:3000/api/user/blacklist`;
    
    const blacklistResponse = await fetch(blacklistURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: tokenCookie }),
    });

    const isBlacklisted = await blacklistResponse.json();
    console.log("Middleware Blacklist Response::", isBlacklisted);

    if(!isBlacklisted.success) return NextResponse.error();

    // Verify the token
    const decoded = await jose.jwtVerify(tokenCookie, jwtConfig.secret);
    console.log("Decoded::", decoded);

    const currentTime = Math.floor(Date.now() / 1000);
    const tokenExpiryTime: any = decoded.payload?.exp;

    if (currentTime > tokenExpiryTime) return NextResponse.redirect(new URL('/error', request.url));

    return decoded.payload?.id ? true : false;

  } catch (error: any) {
    console.error("Valid Token Error::", error);
    return NextResponse.error();
  }

};

export async function middleware(request: NextRequest) {
  try {
    const validToken = await verifyToken(request);
    return validToken ? NextResponse.next() : NextResponse.redirect(new URL('/error', request.url));
  } catch (error) {
    console.error("Middleware Error::", error);
    return NextResponse.error();
  }
}


import { NextRequest, NextResponse } from "next/server";
import { validateSession } from "@/lib/session";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  
  const session = await validateSession(token);

  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const country = request.geo?.country;
  const requestHeaders = new Headers(request.headers);
  if (country) requestHeaders.set("country", country);

  return NextResponse.next();
}

export const config = {
  matcher: "/movie/:path*",
};

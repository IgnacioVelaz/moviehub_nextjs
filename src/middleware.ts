import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const country = request.geo?.country;
  const response = NextResponse.next();
  if (country) response.headers.set("country", country);

  return response;
}

export const config = {
  matcher: "/movie/:path*",
};

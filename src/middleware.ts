import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
        Match all path exept for:
         1. /api routes
         2. /_next (Next.js internals)
         3. /_static (inside/public)
         4. all root files inside /public (e.g. /favicon.ico)
        */
    "/((?!api/|_next/|_static/|_vercel|media/|[\w-]+\.\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  //extract the hostname (e.g., "anton.funroad.com" or "jonh.localhost:3000")

  const hostname = req.headers.get("host") || "";

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "";

  if (hostname.endsWith(`.${rootDomain}`)) {
    const tenantSlug = hostname.replace(`.${rootDomain}`, "");
    return NextResponse.rewrite(
      new URL(`/tenant/${tenantSlug}${url.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

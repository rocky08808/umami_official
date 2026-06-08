import { NextRequest, NextResponse } from "next/server";
import { isValidLocale, locales } from "./lib/i18n/config";
import { negotiateLocale } from "./lib/i18n/negotiate-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    if (isValidLocale(locale)) {
      response.headers.set("x-locale", locale);
    }
    return response;
  }

  const locale = negotiateLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|images|favicon|opengraph|android-chrome|apple-touch|.*\\..*).*)",
  ],
};

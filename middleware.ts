import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "./lib/i18n/config";

function getPreferredLocale(request: NextRequest): string {
  const header = (request.headers.get("accept-language") ?? "").toLowerCase();

  for (const locale of locales) {
    if (header.includes(locale)) return locale;
  }

  return defaultLocale;
}

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

  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|images|favicon|opengraph|android-chrome|apple-touch|.*\\..*).*)",
  ],
};

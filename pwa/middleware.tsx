import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

export default async function middleware(req: NextRequest) {
    const localeMiddlewareResponse = await localeMiddleware(req);
    if (localeMiddlewareResponse) return localeMiddlewareResponse;

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|favicon.ico).*)"],
};

const localeMiddleware = async function (
    req: NextRequest,
): Promise<NextResponse | undefined> {
    const pathname = req.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, req.url),
        );
    }
};

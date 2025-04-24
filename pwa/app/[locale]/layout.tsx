import { ReactNode } from "react";
import RootLayoutClient from "./RootLayoutClient";

type RootLayoutProps = {
    children: ReactNode;
    params: Promise<{
        locale: string;
    }>;
};

export default async function RootLayout({
    children,
    params,
}: RootLayoutProps) {
    const { locale } = await params;

    return <RootLayoutClient locale={locale}>{children}</RootLayoutClient>;
}

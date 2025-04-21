import { ReactNode } from "react";
import ClientIntlProvider from "../../components/ClientIntlProvider";

// CSS
import "../../styles/globals.css";

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
    return (
        <html lang={locale}>
            <body>
                <ClientIntlProvider locale={locale}>
                    {children}
                </ClientIntlProvider>
            </body>
        </html>
    );
}

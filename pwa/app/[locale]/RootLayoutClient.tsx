"use client";

import { ReactNode, useEffect } from "react";
import ClientIntlProvider from "components/ClientIntlProvider";
import { useFlashStore } from "stores/flashStores";
import { Toaster, toast } from "sonner";

import "styles/globals.css";

type RootLayoutClientProps = {
    children: ReactNode;
    locale: string;
};

export default function RootLayoutClient({
    children,
    locale,
}: RootLayoutClientProps) {
    const { flash, clearFlash } = useFlashStore();

    useEffect(() => {
        if (flash) {
            toast[flash.type](flash.message);
            clearFlash();
        }
    }, [flash, clearFlash]);

    return (
        <html lang={locale}>
            <body>
                <ClientIntlProvider locale={locale}>
                    <Toaster />
                    {children}
                </ClientIntlProvider>
            </body>
        </html>
    );
}

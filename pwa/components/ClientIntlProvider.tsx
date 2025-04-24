"use client";

import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import translations from "../translations/translations";

type Props = {
    children: ReactNode;
    locale: string;
};

export default function ClientIntlProvider({ children, locale }: Props) {
    return (
        <IntlProvider
            locale={locale}
            defaultLocale="fr"
            messages={flattenMessages(
                translations[locale as keyof typeof translations],
            )}
        >
            {children}
        </IntlProvider>
    );
}

function flattenMessages(
    nestedMessages: Record<string, any>,
    prefix = "",
): Record<string, string> {
    return Object.entries(nestedMessages).reduce(
        (acc, [key, value]) => {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof value === "object" && value !== null) {
                Object.assign(acc, flattenMessages(value, newKey));
            } else {
                acc[newKey] = value;
            }
            return acc;
        },
        {} as Record<string, string>,
    );
}

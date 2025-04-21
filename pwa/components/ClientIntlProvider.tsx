'use client';

import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import translations from '../translations/translations';

type Props = {
    children: ReactNode;
    locale: string;
};

export default function ClientIntlProvider({ children, locale }: Props) {
    return (
        <IntlProvider
            locale={locale}
            defaultLocale="fr"
            messages={translations[locale as keyof typeof translations]}
        >
            {children}
        </IntlProvider>
    );
}

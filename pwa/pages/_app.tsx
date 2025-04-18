import "../styles/globals.css"
import Layout from "../components/common/Layout"
import type { AppProps } from "next/app"
import type { DehydratedState } from "@tanstack/react-query"
import { IntlProvider } from 'react-intl'
import translations from "../translations/translations"

function MyApp({ Component, pageProps, router }: AppProps<{dehydratedState: DehydratedState}>) {
    const locale = router.locale ?? 'fr';
    return (
        <IntlProvider
            locale={locale}
            defaultLocale="fr"
            messages={translations[locale as keyof typeof translations]}
        >
            <Layout dehydratedState={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    );
}

export default MyApp

import Head from "next/head";
import Link from "next/link";
import React from "react";
import {useIntl} from "react-intl";

const Welcome = () => {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (undefined === publicApiUrl) throw new Error("NEXT_PUBLIC_API_URL is not defined");
    const intl = useIntl();

    return(
        <div>
            <Head>
                <Link href="/greeting" className="btn btn-outline-primary">{intl.formatMessage({id: "greeting"})}</Link>
            </Head>
        </div>
    );
}

export default Welcome;
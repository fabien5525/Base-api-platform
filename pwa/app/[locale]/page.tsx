'use client';

import Link from "next/link";
import React from "react";
import {useIntl} from "react-intl";

export default function HomePage() {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (undefined === publicApiUrl) throw new Error("NEXT_PUBLIC_API_URL is not defined");
    const intl = useIntl();

    return(
        <div className="container m-2">
            <Link href="/greeting" className="btn btn-outline-primary">{intl.formatMessage({id: "greeting"})}</Link>
            <Link href="/auth/login" className="btn btn-primary ms-2">{intl.formatMessage({id: "login"})}</Link>
        </div>
    );
}
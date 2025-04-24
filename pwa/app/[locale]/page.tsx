"use client";

import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";
import { useFlashStore } from "stores/flashStores";

export default function HomePage() {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (undefined === publicApiUrl)
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
    const intl = useIntl();
    const setFlash = useFlashStore((state) => state.setFlash);

    return (
        <div className="container m-2">
            <Link href="/greeting" className="btn btn-outline-primary">
                {intl.formatMessage({ id: "greeting" })}
            </Link>
            <Link href="/auth/login" className="btn btn-primary ms-2">
                {intl.formatMessage({ id: "login" })}
            </Link>
            <button
                onClick={() =>
                    setFlash({
                        type: "success",
                        message: intl.formatMessage({ id: "alert.success" }),
                    })
                }
                className="btn btn-success ms-2"
            >
                {intl.formatMessage({ id: "alert.success" })}
            </button>
            <button
                onClick={() =>
                    setFlash({
                        type: "error",
                        message: intl.formatMessage({ id: "alert.error" }),
                    })
                }
                className="btn btn-danger ms-2"
            >
                {intl.formatMessage({ id: "alert.error" })}
            </button>
            <button
                onClick={() =>
                    setFlash({
                        type: "info",
                        message: intl.formatMessage({ id: "alert.info" }),
                    })
                }
                className="btn btn-info ms-2"
            >
                {intl.formatMessage({ id: "alert.info" })}
            </button>
        </div>
    );
}

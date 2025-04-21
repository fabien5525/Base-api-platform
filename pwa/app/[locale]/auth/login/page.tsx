"use client";

import { useActionState } from "react";
import { signup } from "actions/auth";
import { useSession } from "hooks/useSession";
import { useRouter } from "next/router";

export default function Page() {
    const [session, sessionLoaded] = useSession();
    const router = useRouter();

    if (session && sessionLoaded) {
        router.push("/").catch();
    }

    const [state, loginAction, pending] = useActionState(signup, undefined);

    return (
        <div className="container">
            <form action={loginAction}>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 mb-2">
                        <button
                            type="submit"
                            disabled={pending}
                            className="btn btn-outline-primary"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <pre></pre>
        </div>
    );
}

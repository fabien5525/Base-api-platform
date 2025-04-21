"use client";

import { useEffect, useState } from "react";

export type ClientSession = {
    roles: string[];
};

export function useSession(): [ClientSession | null, boolean] {
    const [session, setSession] = useState<ClientSession | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        fetch("/api/session")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // if (!isMounted) return;
                // setSession(data.session);
            })
            .catch(() => {
                if (!isMounted) return;
                setSession(null);
            })
            .finally(() => {
                if (!isMounted) return;
                setLoaded(true);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return [session, loaded];
}

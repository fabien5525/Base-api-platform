import "server-only";
import { importSPKI, jwtVerify } from "jose";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

export type Session = {
    iat: number;
    exp: number;
    roles: string[];
    userId: string;
};

const alg = "RS256";
const publicKeyPath = path.join(
    process.cwd(),
    process.env.JWT_PUBLIC_KEY_PATH ?? "",
);
if (!fs.existsSync(publicKeyPath))
    throw new Error(
        "JWT_PUBLIC_KEY_PATH is not defined or the file does not exist",
    );
const publicKey = fs.readFileSync(publicKeyPath, "utf-8");

export async function decrypt(token: string): Promise<Session> {
    const encodedKey = await importSPKI(publicKey, alg);
    const { payload } = await jwtVerify(token, encodedKey, {
        algorithms: [alg],
    });

    return payload as Session;
}

export async function createSession(token: string) {
    const session = await decrypt(token);
    const cookieStore = await cookies();

    console.log("Creating session");
    console.log(session);

    cookieStore.set("session", token, {
        httpOnly: true,
        secure: true,
        expires: new Date(session.exp * 1000),
        sameSite: "lax",
        path: "/",
    });
}

export async function getSession(): Promise<Session | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) return null;
    return await decrypt(token);
}

export async function getHeaders() {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    if (!token) throw new Error("No session found");
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    };
}

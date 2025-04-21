import { redirect } from "next/navigation";
import { getSession } from "./session";

export async function denyAccessUnlessGranted(role: string) {
    const session = await getSession();

    if (!session || !session.roles.includes(role)) {
        redirect("/auth/login");
    }
}

'use server';

import {paths} from "@openapi";
import {createSession} from "lib/session";
import {redirect} from "next/navigation";

type AuthResponse200 = paths["/auth"]["post"]["responses"]["200"]['content']["application/json"];

export type SignupActionState = {
    email: string;
    password: string;
    errors?: {
        form?: string[];
        email?: string[];
        password?: string[];
    };
}

export async function signup(
    previousState: SignupActionState|undefined,
    formData: FormData
): Promise<SignupActionState> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return {
            email,
            password,
            errors: {
                form: ['Email and password are required']
            }
        }
    }

    const res = await fetch(`${process.env.INTERNAL_API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    if (!res.ok) {
        const response = res.json();
        console.error(JSON.stringify(response))
        return {
            email,
            password,
            errors: {
                form: ['Invalid email or password']
            }
        }
    }

    const data = await res.json() as AuthResponse200;
    await createSession(data.token);

    redirect('/');
}
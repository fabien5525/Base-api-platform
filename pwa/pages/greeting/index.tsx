import {paths, components} from "@openapi";
import {useEffect, useState} from "react";

type Greeting = components["schemas"]["Greeting"];
type GreetingGetResponse = paths["/greetings"]["get"]["responses"]["200"]["content"]["application/json"];

export default function Greeting() {
    const [greetings, setGreetings] = useState<Greeting[]>([]);

    useEffect(() => {
        const fetchGreetings = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/greetings`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            });
            const data = await res.json() as GreetingGetResponse;
            setGreetings(data);
        };
        fetchGreetings().catch(console.error);
    }, []);

    return <div className="">
        {greetings.map((greeting) => (
            <div key={greeting.id} className="">
                <h2 className="">{greeting.id}</h2>
                <p className="">{greeting.name}</p>
            </div>
        ))}
    </div>;
}
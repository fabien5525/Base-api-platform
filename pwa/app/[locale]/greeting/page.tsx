import {paths, components} from "@openapi";
import {denyAccessUnlessGranted} from "../../../lib/guard";
import {getHeaders} from "../../../lib/session";

type Greeting = components["schemas"]["Greeting"];
type GreetingGetResponse200 = paths["/greetings"]["get"]["responses"]["200"]["content"]["application/json"];

export default async function Greeting() {
    await denyAccessUnlessGranted('ROLE_USER');

    const res = await fetch(`${process.env.INTERNAL_API_URL}/greetings`, {
        method: 'GET',
        headers: await getHeaders(),
    });

    const greetings : Greeting[] = res.ok ? await res.json() as GreetingGetResponse200 : [];

    console.log(greetings);

    return <div className="container">
        {greetings.map(({id, name}) => (
            <div key={id}>
                <p><strong>{id}</strong> {name}</p>
            </div>
        ))}
        {greetings.length === 0 && <p>No greetings found.</p>}
    </div>;
}
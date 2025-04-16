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

  return <div className="min-w-100 min-h-dvh bg-gray-400">
    {greetings.map((greeting) => (
      <div key={greeting.id} className="bg-white p-4 m-4 rounded shadow">
        <h2 className="text-xl font-bold">{greeting.id}</h2>
        <p className="text-gray-700">{greeting.name}</p>
      </div>
    ))}
  </div>;
}
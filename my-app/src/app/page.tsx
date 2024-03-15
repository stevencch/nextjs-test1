import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from "./components/CurrentTimeFromAPI";


async function getData() {
  const res = await fetch('https://func-googlembstorepublisher-as-dev.azurewebsites.net/api/RunFunction1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.text()
}



export default async  function Home() {
  noStore();
  const timeOnServer = new Date().toLocaleTimeString('en-US');
  const data = await getData()
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Home Page</h1>
        <div>
          This is a Next.js application hosted on Azure Static Web Apps with
          hybrid rendering. The time on the server is <strong>{timeOnServer}</strong>.
        </div>
        <div>
          http fetch {data}
        </div>
        <div>

        </div>
        <CurrentTimeFromAPI />
      </div>
    </main>
  );
}

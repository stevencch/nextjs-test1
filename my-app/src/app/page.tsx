import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from "./components/CurrentTimeFromAPI";

export default function Home() {
  noStore();
  const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Home Page</h1>
        <div>
          This is a Next.js application hosted on Azure Static Web Apps with
          hybrid rendering. The time on the server is <strong>{timeOnServer}</strong>.
        </div>
        <CurrentTimeFromAPI />
      </div>
    </main>
  );
}

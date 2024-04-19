import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react"

export default function Home() {
  return (
    <NextUIProvider> 
    <main className="min-h-screen bg-logone-cream flex items-center justify-center">
      <div> 
        <Image 
          src="/LoGONELogo.svg"
          width={500}
          height={500}
          alt="LoGONE logo"
        />
      </div> 
      <p className="text-4xl text-logone-black">The first AI-powered video copyright buccaneer</p>
    </main>
    </NextUIProvider>
  );
}

'use client'; 
import Image from "next/image";
import { Button } from "@nextui-org/react";
import FlashyText from '../components/flashyText';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();

  return (
      <main className="min-h-screen bg-neutral-200 flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center justify-center gap-4"> {/* Changed from items-center to items-baseline */}
          <Image
            src="/LoGONELogo.svg"
            width={500}
            height={500}
            alt="LoGONE logo"
          />
          <p className="font-sans text-4xl text-logone-black flex items-center"> {/* Ensure baseline alignment for text */}
            The first AI-powered video copyright <span className="inline-block text-logone-pink" style={{ minWidth: '200px' }}><FlashyText /></span>
          </p> {/* Wrapped FlashyText in a span with a fixed minimum width */}
        </div>
        <div className="w-full flex justify-center">
          <Button 
              className="bg-logone-pink text-white font-bold" 
              variant="shadow" 
              onClick={() => router.push('/editor')}>Click to get started</Button>
        </div>
      </main>
  );
}

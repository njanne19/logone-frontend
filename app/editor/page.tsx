'use client'; 
import Image from 'next/image';
import VideoPrompt from './videoPrompt';


export default function Editor() {

    return (
        <>
            <div className="min-h-screen editor-container bg-neutral-50">
                <div className={`flex flex-row bg-gradient-to-b
                 from-neutral-100 via-neutral-50 to-neutral-100 
                 border-t border-b border-neutral-200`}> 

                    <Image
                        className="mt-2 ml-5 mb-2"
                        src={'/LoGONELogo.svg'}
                        height={150}
                        width={150}
                        alt="LoGONE logo" />
                    <p className="font-mono text-2xl text-logone-pink mt-4 mb-2">
                        /editor
                    </p>
                </div> 
                <VideoPrompt />
            </div> 
        </>
        
    )

}
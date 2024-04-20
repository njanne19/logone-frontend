'use client'; 
import Image from 'next/image';
import VideoPrompt from './videoPrompt';
import DetectionsOverview from './detectionsOverview';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { requestYolo } from './videoService';


export default function Editor() {
    // Router for nav 
    const router = useRouter();

    // States for vision pipeline 
    const [loadingYolo, setLoadingYolo] = useState<boolean>(false);
    const [yoloData, setYoloData] = useState<string | null>(null);
    const [yoloError, setYoloError] = useState<boolean>(false);

    // Callback for yolo video prompt 
    const handleYoloRequest = async (video: File) => {
        if (video) {
            setLoadingYolo(true); 
            try {
                const data = await requestYolo(video);
                if (data.base64Video) {
                    setYoloData(`data:video/mp4;base64,${data.base64Video}`);
                    console.log(data.message); 
                }
            } catch (error) {
                console.error('Failed to process video for yolo:', error); 
                setYoloError(true);
            }
        } else {
            console.error('Yolo video is null');
        }
    };

    return (
        <>
            <div className="min-h-screen editor-container bg-neutral-50">
                <div className={`flex flex-row bg-gradient-to-b
                 from-neutral-100 via-neutral-50 to-neutral-100 
                 border-t border-b border-neutral-200`}> 

                    <Image
                        className="mt-2 ml-5 mb-2 hover:cursor-pointer"
                        src={'/LoGONELogo.svg'}
                        height={150}
                        width={150}
                        alt="LoGONE logo" 
                        onClick={() => router.push('/')}
                        />
                    <p className="font-mono text-2xl text-logone-pink mt-4 mb-2">
                        /editor
                    </p>
                </div> 
                <VideoPrompt onVideoLoad={handleYoloRequest}/>
                <DetectionsOverview loading={loadingYolo} error={yoloError} videoData={yoloData}/>
            </div> 
        </>
        
    )

}
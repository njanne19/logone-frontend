import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { Spinner } from "@nextui-org/react";

interface DetectionsDisplayProps {
    loading: boolean; 
    error: boolean; 
    videoData: string | null; 
}

const DetectionsOverview : React.FC<DetectionsDisplayProps> = ({ loading, error, videoData }) => {
    // Set visibility of the remainder of the div 
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className={`video-prompt-container bg-neutral-200 
            mt-5 ml-10 mr-10 rounded-xl border-t border-b border-l border-r flex flex-col`}>
            
            <div className={`videoPromptHeader bg-gradient-to-b from-neutral-100
             via-neutral-50 to-neutral-100 flex flex-row items-center rounded-xl
             pt-2 pb-2`}>
                <p className={`flex items-center justify-center font-sans text-2xl text-logone-black 
                ml-5 rounded-full h-10 w-10 border-4 border-neutral-300 bg-neutral-200`}>
                    2
                </p>

                <p className="font-sans flex items-center text-2xl text-logone-black h-6 ml-10">
                    View detections
                </p>
                <Button className="ml-auto mr-5" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'}
                </Button>
            </div>
            <div className={`flex flex-col flex-grow items-center justify-center
            transition-height duration-1000 ease-in-out 
            ${isVisible ? 'min-h-96 opacity-100' : 'max-h-0 opacity-100'}
            overflow-hidden`} >
                {handleDetectionLoadingLogic(loading, error, videoData)}
            </div> 
        </div>
    );
}

function handleDetectionLoadingLogic (loading: boolean, error : boolean, videoData: string | null) {

    console.log("From DetectionsOverview: ", loading, error, videoData)

    if (error) {
        return (
            <div className="flex flex-col flex-grow items-center justify-center">
                <FaRegTimesCircle size={92} style={{ marginBottom: 10, color: '#737373', opacity: 0.75 }} />
                <div>Failed to process video.</div>
            </div>
        )
    }

    if (!loading && !videoData) {
        return (
            <div className="flex flex-col flex-grow items-center justify-center">
                <FaExclamationTriangle size={92} style={{ marginBottom: 10, color: '#737373', opacity: 0.75 }} />
                <div>You still need to upload a video above.</div>
            </div>
        )
    } else if (loading && !videoData) {
        return(
            <div className="flex flex-col flex-grow items-center justify-center">
                <Spinner size="lg" />
                <div> Processing video...</div>
            </div>
        )
    } else if (!loading && videoData) {
        return (
            <video className={`w-11/12 h-auto mt-4 mb-4 rounded-xl border`} src={videoData} controls/>
        )
    } else {
        return (
            <div className="flex flex-col flex-grow items-center justify-center">
                <FaRegTimesCircle size={92} style={{ marginBottom: 10, color: '#737373', opacity: 0.75 }} />
                <div>Something unexpected has occured.</div>
            </div>
        )
    }
}

export default DetectionsOverview; 
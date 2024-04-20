import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { FaVideo } from "react-icons/fa";

interface VideoPromptProps {
    onVideoLoad: (video: File) => void;
}

const VideoPrompt : React.FC<VideoPromptProps> = ({ onVideoLoad }) => {
    // Set visibility of the remainder of the div 
    const [isVisible, setIsVisible] = useState<boolean>(true);

    // File information 
    const [videoFile, setVideoFile] = useState<File | null>(null); 
    const [videoFileName, setVideoFileName] = useState<string | null>(null);
    // URL generated by parser, points to object in memory
    const [videoUrl, setVideoUrl] = useState<string | null>(null); 
    // Reference object created by input
    const inputVideoFileRef = useRef<HTMLInputElement>(null); 

    // Modify the file state 
    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => { 
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            setVideoFile(selectedFile); 
            setVideoFileName(selectedFile.name); 
            setVideoUrl(URL.createObjectURL(selectedFile)); 
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();  // Prevent default behavior (file opens automatically)
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault(); 
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) { 
            const droppedFile = event.dataTransfer.files[0];
            setVideoFile(droppedFile);
            setVideoFileName(droppedFile.name); 
            setVideoUrl(URL.createObjectURL(droppedFile)); 
        }
    }

    const handleButtonClick = () => {
        inputVideoFileRef.current?.click();
    }

    // Send the video file back to the parent 
    useEffect(() => {
        if (videoFile) {
            onVideoLoad(videoFile);
        }
    }, [videoFile]);

    // Display the filename in console 
    useEffect(() => {
        console.log("File name: ", videoFileName);
        console.log("Video URL: ", videoUrl);
    }, [videoFileName]);

    useEffect(() => {
        return () => {
            if (videoUrl) {
                URL.revokeObjectURL(videoUrl); 
            }
        }
    }, [videoUrl]); 

    return (
        <div className={`video-prompt-container bg-neutral-200 
            mt-5 ml-10 mr-10 rounded-xl border-t border-b border-l border-r flex flex-col`}>
            
            <div className={`videoPromptHeader bg-gradient-to-b from-neutral-100
             via-neutral-50 to-neutral-100 flex flex-row items-center rounded-xl
             pt-2 pb-2`}>
                <p className={`flex items-center justify-center font-sans text-2xl text-logone-black 
                ml-5 rounded-full h-10 w-10 border-4 border-neutral-300 bg-neutral-200`}>
                    1
                </p>

                <p className="font-sans flex items-center text-2xl text-logone-black h-6 ml-10">
                    Upload a video 
                </p>
                <Button className="ml-auto mr-5" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'}
                </Button>
            </div>
            <div className={`flex flex-col flex-grow items-center justify-center
            transition-height duration-1000 ease-in-out 
            ${isVisible ? 'min-h-96 opacity-100' : 'max-h-0 opacity-100'}
            overflow-hidden`} 
            onDragOver={handleDragOver} onDrop={handleDrop}>
                {videoUrl ? (
                    // Render the video player if a video is set
                    <video className={`w-11/12 h-auto mt-4 mb-4 rounded-xl border`} src={videoUrl} controls/>
                ) : (
                    // Render file input and controls if no video is set
                    <div className="flex flex-col flex-grow items-center justify-center" onDragOver={handleDragOver} onDrop={handleDrop}>
                        <input type="file" ref={inputVideoFileRef} style={{ display: 'none' }} onChange={handleFileChange} accept="video/*" />
                        <FaVideo size={92} style={{ marginBottom: 10, color: '#737373', opacity: 0.75 }} />
                        <Button color="primary" variant="faded" onClick={handleButtonClick}>
                            Choose a file
                        </Button>
                        <div>or drag and drop</div>
                    </div>
                )}
            </div> 
        </div>
    );
}

export default VideoPrompt; 
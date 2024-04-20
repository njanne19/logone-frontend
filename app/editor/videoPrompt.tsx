
import {Accordion, AccordionItem, Avatar, input} from "@nextui-org/react";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { FaVideo } from "react-icons/fa";

const VideoPrompt : React.FC<null> = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null); 
    const [videoFileName, setVideoFileName] = useState<string | null>(null);
    const inputVideoFileRef = useRef<HTMLInputElement>(null); 

    // Modify the file state 
    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => { 
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            setVideoFile(selectedFile); 
            setVideoFileName(selectedFile.name); 
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
        }
    }

    const handleButtonClick = () => {
        inputVideoFileRef.current?.click();
    }

    // Display the filename in console 
    useEffect(() => {
        console.log("File name: ", videoFileName);
    }, [videoFileName]);

    return (
        <div className={`min-h- video-prompt-container min-h-96 bg-neutral-200 
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
            </div>
            <div className="flex flex-col flex-grow items-center justify-center" onDragOver={handleDragOver} onDrop={handleDrop}>
                <input type="file" ref={inputVideoFileRef} style={{ display: 'none' }} onChange={handleFileChange} />
                <FaVideo size={92} style={{ marginBottom: 10, color: '#737373', opacity: 0.75 }} />  {/* Custom tinted duotone video icon */}
                <Button color="primary" variant="faded" onClick={handleButtonClick}>
                    Choose a file
                </Button>
                <div className="">or drag and drop</div>
            </div> 
        </div>
    );
}

export default VideoPrompt; 
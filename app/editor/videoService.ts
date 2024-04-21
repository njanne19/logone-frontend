'use client'; 
const API_URL = 'http://10.0.0.46:5000';

interface YoloResponse { 
    message: string; 
    base64Video?: string; 
}

export const requestYolo = async(file: File): Promise<YoloResponse> => {
    const formData = new FormData(); 
    formData.append('video', file); 

    try {
        const response = await fetch(`${API_URL}/yolo`, {
            method: 'POST', 
            body: formData,
        }); 
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return await response.json(); 
    } catch (error) {
        console.error('Error processing video: ', error); 
        throw error; 
    }
};
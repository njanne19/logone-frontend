import React, { useState, useEffect } from 'react'; 

const words = ['bucaneer', 'scoundrel', 'scallywag', 'bandit', 'corsair'];

function formatShortString(input: string, width: number): string {
    if (input.length < width) {
        // Calculate total padding needed
        const totalPadding = width - input.length;
        // Calculate padding for each side
        const paddingSide = Math.floor(totalPadding / 2);
        const paddingExtra = totalPadding % 2;
        // Pad and center the string
        return '\u00A0'.repeat(paddingSide) + input + '\u00A0'.repeat(paddingSide + paddingExtra);
    } else {
        // Cut the string to fit the width
        return input.substring(0, width);
    }
}


const FlashyText: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setFade(false); 
            setTimeout(() => {
                setIndex((index + 1) % words.length); 
                setFade(true); 
            }, 500); 
        }, 2000); 

        return () => clearTimeout(timeoutID);
    }, [index]); 

    return (
        <span className={`transition-opacity duration-500 ${fade ? 'opacity-100': 'opacity-0'}`}>
            {formatShortString(words[index], 12)}
        </span>
    )

}

export default FlashyText; 
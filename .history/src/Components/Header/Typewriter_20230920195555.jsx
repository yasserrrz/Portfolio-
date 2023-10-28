import React, { useState, useEffect } from 'react';

export default function Typewriter({words }) {
    const [text, setText] = useState('');
    const phrases = [
      "I Am Front-End ",
      "I Am Designer",
      // Add more phrases here
    ];
    const animationDelay = 100; // Adjust the typing speed (milliseconds per character)
    const deleteDelay = 100; // Adjust the deleting speed (milliseconds per character)
    const pauseBeforeTyping = 1000; // Adjust the pause time before typing a new character (1 second in this example)
    const [charIndex, setCharIndex] = useState(0);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (!isDeleting) {
          // Typing
          if (charIndex < phrases[phraseIndex].length) {
            setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
          } else {
            // Finished typing this phrase, pause before deleting
            setIsDeleting(true);
            setTimeout(() => {
              setIsDeleting(false);
            }, pauseBeforeTyping);
          }
        } else {
          // Deleting
          if (text.length > 0) {
            setText((prevText) => prevText.slice(0, -1));
          } else {
            // Finished deleting, move to the next phrase
            setCharIndex(0);
            setIsDeleting(false);
            const nextPhraseIndex = (phraseIndex + 1) % phrases.length;
            setPhraseIndex(nextPhraseIndex);
          }
        }
      }, isDeleting ? deleteDelay : animationDelay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [charIndex, phraseIndex, phrases, isDeleting]);
  
    return (
      <div className="intro-text">
        <h1>
          {text}
          <span style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 500 }}>|</span>
        </h1>
      </div>
    );
}

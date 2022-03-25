import 'regenerator-runtime/runtime';
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './style.module.css';
const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const router = useRouter();
    const [isListening, setIsListening] = useState(false);

    const handleStart = useCallback(() => {
        resetTranscript();
        setIsListening(true);
        SpeechRecognition.startListening();
    }, [resetTranscript]);

    const handleStop = useCallback(() => {
        setIsListening(false);
        SpeechRecognition.stopListening();
    }, []);

    const handleClick = useCallback(() => {
        if (isListening) {
            handleStop()
        } else {
            handleStart();
        }
    }, [handleStart, handleStop, isListening]);

    const handleOpenLetter = () => {
        router.push('/letter');

    };

    if (!browserSupportsSpeechRecognition) {
        // eslint-disable-next-line react/no-unescaped-entities
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className={styles.container}>
            <h1 style={{marginBottom: 0}}>Hi, Abel!</h1>
            <p style={{marginTop: 0}}>If you can see this, it means that you already have the flowers with you.<br/>I wanna say some things to you.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
            Please open this letter by tap the Start button and saying: "I will forgive you". Remember to keep your words, heheh.</p>
            <div>
                <button onClick={handleClick}>{!isListening ? 'Start' : 'Reset'}</button>
            </div>
            <p>You say:<br/>{transcript ? transcript: '-'}</p>
            <div>
                {transcript === 'I will forgive you' && <button onClick={handleOpenLetter}>Open Letter</button>}
            </div>
        </div>
    );
};
export default Dictaphone;
import React, { useEffect, useState } from 'react'

type Props = {
    wordToGuess: string[];
    usedLetters: string[];
    usedWords: string[];
    remainingAttempts: number;
    onLetterGuess: (letter: string) => void;
    onWordGuess: (word: string) => void;
}

const HangmanComponent = (props: Props) => {
    const { wordToGuess, usedLetters, remainingAttempts, usedWords,
            onLetterGuess, onWordGuess 
        } = props;

        const [guess, setGuess] = useState("")

    useEffect(() => {
        
    }, [wordToGuess]);

    const renderWord = () => {
        return wordToGuess.map((letter, index) => (
            <span key={index} style={{ margin: "0 5px", fontSize: "1.5em" }}>
                {letter}
            </span>
        ));
    };

    const renderUsedLetters = () => {
        return usedLetters.length > 0 ? usedLetters.join(", ").toUpperCase() : " ";
    };

    
    const renderUsedWords = () => {
        return usedWords.length > 0 ? usedWords.join(", ").toUpperCase() : " ";
    };
    
    const handleSubmitGuess = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (guess.trim().length < 1){
            return;
        } else if (guess.trim().length === 1) {
            onLetterGuess(guess);
        } else {
            onWordGuess(guess);
        }
        setGuess("");
    };

    return (
        <>
            <p>Palabra: {renderWord()}</p>
            <p>Letras usadas: {renderUsedLetters()}</p>
            <p>Palabras usadas: {renderUsedWords()}</p>
            <p>Intentos restantes: {remainingAttempts}</p>
            <form onSubmit={handleSubmitGuess}>
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Adivina letra o palabra"
                />
                <button type="submit">
                    Guess
                </button>
            </form>
        </>
    )
}

export default HangmanComponent
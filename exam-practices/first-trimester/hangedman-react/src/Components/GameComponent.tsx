import React, { useEffect, useRef, useState } from "react";
import Game from "../Models/Game";
import HangmanComponent from "./HangmanComponent";

const GameComponent = () => {
    const [word, setWord] = useState<string>("");
    const [wordToGuess, setWordToGuess] = useState<string[]>([]);
    const [usedLetters, setUsedLetters] = useState<string[]>([]);
    const [usedWords, setUsedWords] = useState<string[]>([]);
    const [remainingAttempts, setRemainingAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [restart, setrestart] = useState(false)

    const refGame = useRef(new Game());

    useEffect(() => {
        refGame.current.chooseWord();
        setWordToGuess([...refGame.current.getWordToGuess()]);
        const wordAdd = refGame.current.getGlobalWordChosen();
        setWord(wordAdd);
        setRemainingAttempts(refGame.current.remainingAttempts());
    }, [word]);


    const handleLetterGuess = (letter: string) => {
        refGame.current.correctLetter(letter);
        console.log(word, letter);
        const checkAllLetters = refGame.current.checkAllLettersRevealed();

        if(checkAllLetters){
            setGameWon(true);
            refGame.current.revealWord();
            setWordToGuess([...refGame.current.getWordToGuess()]);
            return;
        }

        setWordToGuess([...refGame.current.getWordToGuess()]);
        setUsedLetters([...refGame.current.getUsedLettersArray()]);
        setRemainingAttempts(refGame.current.remainingAttempts());
        
        if(refGame.current.checkGameOver()){
            setGameOver(true);
            setrestart(true);
        }

    };

    const handleWordGuess = (wordCheck: string) => {
        const isCorrect = refGame.current.checkWord(wordCheck);

        if (isCorrect) {
            console.log(`La palabra "${wordCheck}" es correcta.`);
            refGame.current.revealWord();
            setWordToGuess([...refGame.current.getWordToGuess()]);
            setGameWon(true);
            setGameOver(true);
            setrestart(true);
            return;
        }

        setWordToGuess([...refGame.current.getWordToGuess()]);
        setUsedWords([...refGame.current.getUsedWordsArray()]);
        setRemainingAttempts(refGame.current.remainingAttempts());

        if(refGame.current.checkGameOver()){
            setGameOver(true);
            setrestart(true);
        }
    };

    const restartGame = () => {
        refGame.current.restartValues();
        refGame.current.chooseWord();
        setWordToGuess([...refGame.current.getWordToGuess()]);
        setWord(refGame.current.getGlobalWordChosen());
        refGame.current.setErrorCounter(0);
        setRemainingAttempts(refGame.current.remainingAttempts());
        setWordToGuess([]);
        setUsedLetters([]);
        setUsedWords([]);
        setGameOver(false);
        setGameWon(false);
        setrestart(false);
    };

    return (
        <>
            <h1>Ahorcado</h1>
            <HangmanComponent
                wordToGuess={wordToGuess}
                usedLetters={usedLetters}
                remainingAttempts={remainingAttempts}
                onLetterGuess={handleLetterGuess}
                onWordGuess={handleWordGuess}
                usedWords={usedWords}
            />
            {gameOver && !gameWon && <p>¡Perdiste! La palabra era: {word}</p>}
            {gameWon && <p>¡Ganaste! La palabra era: {word}</p>}
            {restart && (
                <button onClick={restartGame}>Reiniciar</button>
            )}
        </>
    );
};

export default GameComponent;

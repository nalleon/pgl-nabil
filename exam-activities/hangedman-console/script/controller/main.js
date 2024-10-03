import {Game} from '../model/game.js';
import { Canvas } from '../view/canvas.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();

const game = new Game();


function startGame() {
    game.errorCounter = 0;
    game.usedLettersArray = [];
    game.usedWordsArray = [];
  
    console.log('----------------------------------------------------------');
    console.log('Guess the word by entering letters. You have 10 attempts.');
    console.log('----------------------------------------------------------');

    let wordPos = game.rndWord(0, game.words.length);
    let wordSelected = game.selectWord(wordPos);
    game.showWord(wordSelected);


    while (!game.isGameOver() && !game.checkIfAllLettersRevealed()){
        console.log('Word to guess: ');
        console.log(game.wordToGuess);
        console.log('Remaining attempts:' + game.remainingAttempts());
        console.log('Used letters:'+  game.usedLettersArray);

        let userLetter = prompt('Enter a letter: ').toLowerCase();
        userLetter = game.removeLetterAccent(userLetter);


        if(game.isLetter(userLetter)){
            if(!game.usedLettersArray.includes(userLetter)){
                game.addUsedLettersArray(userLetter);

                if(game.correctLetter(userLetter)){
                    console.log(`Correct letter!`);
                } else {
                    console.log(`Incorrect letter!`);
                    game.errorCounter++;
                }

            } else {
                console.log('Letter already used!');
            }

        }   

        if (game.isGameOver() || game.checkIfAllLettersRevealed()) {
            endGame();
            break;
        }
    }

}


function endGame(){
    if(game.checkIfAllLettersRevealed()){
        console.log('Congratulations! You won!');
    } else {
        console.log('Game over! You lost!');
    }

    console.log(`Word to guess: ${game.wordToGuess}`);

}

startGame();


 


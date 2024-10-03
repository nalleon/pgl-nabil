import {Game} from '../model/game.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();
const game = new Game();


function startGame() {
    game.errorCounter = 0;
    game.usedLettersArray = [];
    game.usedWordsArray = [];
    console.log('------------------H A N G E D M A N-----------------------');
    console.log(' ');
    console.log('----------------------------------------------------------');
    console.log(' Guess the word by entering letters. You have 10 attempts ');
    console.log('----------------------------------------------------------');

    let wordPos = game.rndWord(0, game.words.length);
    let wordSelected = game.selectWord(wordPos);
    game.showWord(wordSelected);


    while (!game.isGameOver() && !game.checkIfAllLettersRevealed()){
        console.log('Word to guess: ');
        console.log(game.wordToGuess);
        console.log('-_-_-_-_-_-_-_-_-_-_-_-_');

        console.log('Remaining attempts:' + game.remainingAttempts());
        console.log('Used letters:'+  game.usedLettersArray);
        console.log('Used words:'+  game.usedWordsArray);
        console.log(' ');

        let unserInput = prompt('Enter your guess: ').toLowerCase();
        unserInput = game.removeLetterAccent(unserInput);
        console.log(' ');

        if(unserInput.length == 1 && game.isLetter(unserInput)){
            
            if(!game.usedLettersArray.includes(unserInput)){
                game.addUsedLettersArray(unserInput);

                if(game.correctLetter(unserInput)){
                    console.log('Correct letter: ' + unserInput);
                } else {
                    console.log('Incorrect letter: ' + unserInput);
                    game.errorCounter++;
                }

            } else {
                console.log('Letter already used!');
            }

        }   

        if(unserInput.length > 1){
            if(!game.usedWordsArray.includes(unserInput)){
                game.addUsedWordsArray(unserInput);

                if(unserInput == game.globalWordChosen){
                    console.log('Congratulations! You won!');
                    game.putAllCorrectLettersByWord();
                    break;
                } else {
                    console.log(`Incorrect word guess!`);
                    game.errorCounter++;
                }
            } else {
                console.log('Word already used!');
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

    console.log(`Word to guess: ${game.globalWordChosen}`);
}

startGame();


 


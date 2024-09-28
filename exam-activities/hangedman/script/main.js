import {Game} from './game.js';
import { Canvas } from './canvas.js';

const DOM = {
    playBtn : document.getElementById('play'),
    wordToGuess : document.getElementById('word'),
    letterChosen : document.getElementById('letterChosen'),
    usedLetters : document.getElementById('usedLetters'),
    usedWords : document.getElementById('usedWords'),
    canvas : document.getElementById("canvas")
}

const game = new Game();
const canvas = new Canvas(DOM.canvas);

DOM.playBtn.addEventListener('click', game.startGame);

canvas.drawDefaultCanva();

game.letterChosen.addEventListener('keyup', (event) => {
    if (game.errorCounter == game.maxErrorsAllowed){
        game.revealWord();
        game.wordToGuess.style.color = 'rgb(187, 73, 73)';
        return;
    }

    if(game.usedLettersArray.includes(event.target.value)){
        return;
    }

    if(game.usedWordsArray.includes(event.target.value)){
        return;
    }

    if (event.key == 'Enter') {
        if (event.target.value.length == 1 && game.isLetter(event.target.value)) {
            let userLetter = event.target.value.toLowerCase();

            if (game.globalWordChosen.includes(userLetter)){
                game.letterChosen.style.backgroundColor = 'rgb(105, 193, 118)';
                game.correctLetter(userLetter);
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);

            } else {
                game.errorCounter++;
                canvas.selectCanvas(game.errorCounter);
                game.letterChosen.style.backgroundColor = 'rgb(187, 73, 73)';
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);
            }
            game.usedLetters.innerText += userLetter + ', ';
            game.addUsedLettersArray(userLetter);
        } 

        if (event.target.value.length > 1 ){
            let userWord = event.target.value.toLowerCase();
            if (game.globalWordChosen == userWord) {
                game.revealWord();
                game.wordToGuess.style.color = 'rgb(105, 193, 118)';
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);

            } else {
                game.letterChosen.style.backgroundColor = 'rgb(187, 73, 73)';
                game.errorCounter++;
                canvas.selectCanvas(game.errorCounter);
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);
            }
            game.usedWords.innerText += userWord + ', ';
            game.addUsedWordsArray(userWord);
        }
        game.letterChosen.value = '';
    }
}); 

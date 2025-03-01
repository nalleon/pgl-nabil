import {Game} from '../model/game.js';
import { Canvas } from '../view/canvas.js';

const DOM = {
    playBtn : document.getElementById('play'),
    canvas : document.getElementById("canvas"),
    attempts : document.getElementById('attempts')
}

const game = new Game();
const canvas = new Canvas(DOM.canvas);

const loseColor = 'rgb(187, 73, 73)';
const winColor = 'rgb(105, 193, 118)';
const defaultColor = 'rgb(225, 225, 225)';

function startGame() {
    game.errorCounter = 0;
    game.usedLettersArray = [];
    game.usedWordsArray = [];
    game.letterChosen.disabled = false;
    game.wordToGuess.innerHTML = '';
    game.usedLetters.innerHTML = '';
    game.usedWords.innerHTML = '';
    game.wordToGuess.style.color = defaultColor;
    let wordPos = game.rndWord(0, game.words.length);
    let wordSelected = game.selectWord(wordPos);
    game.showWordSpan(wordSelected);
    canvas.drawDefaultCanvas();
}

// TODO: transform to console instead
function revealWord() {
    const globalWordChosenArray = this.globalWordChosen.split('');
    globalWordChosenArray.forEach((chosenWordLetter, i) => {
        const spanElement = this.wordToGuess.querySelector(`span[id="${i}"]`);
        if (spanElement && !spanElement.textContent.trim()) {
            spanElement.textContent = chosenWordLetter;
        }
    });
}


DOM.playBtn.addEventListener('click', startGame);  

game.letterChosen.addEventListener('keyup', (event) => {
    const inputValue = game.removeLetterAccent(event.target.value.toLowerCase());
    DOM.attempts.textContent = game.remainingAttempts();

    if (event.key !== 'Enter') {
        return;
    }

    if(game.usedLettersArray.includes(inputValue) || (game.usedWordsArray.includes(inputValue)) ){
        return;
    }

    if (game.errorCounter == game.maxErrorsAllowed){
        game.revealWord();
        game.wordToGuess.style.color = loseColor;
        game.disableSendValues();
        return;
    }

    if (game.checkIfAllLettersRevealed()) {
        game.wordToGuess.style.color = winColor;
        game.disableSendValues();
        return;
    }


    if (inputValue.length == 1 && game.isLetter(inputValue)) {
        if (game.globalWordChosen.includes(inputValue)){
            game.correctLetter(inputValue);
            game.letterChosen.style.backgroundColor = winColor;

            setTimeout(() => {
                game.letterChosen.style.backgroundColor = defaultColor;
            }, 500);

        } else {
            game.errorCounter++;
            canvas.selectCanvas(game.errorCounter);
            game.letterChosen.style.backgroundColor = loseColor;

            setTimeout(() => {
                game.letterChosen.style.backgroundColor = defaultColor;
            }, 500);
        }
        game.usedLetters.innerText += inputValue + ', ';
        game.addUsedLettersArray(inputValue);
    } 

        if (inputValue.length > 1 ){
            if (game.globalWordChosen == inputValue) {
                game.revealWord();
                game.disableSendValues();
                game.wordToGuess.style.color = winColor;
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = defaultColor;
                }, 500);

            } else {
                game.letterChosen.style.backgroundColor = loseColor;
                game.errorCounter++;
                canvas.selectCanvas(game.errorCounter);
                setTimeout(() => {
                    game.letterChosen.style.backgroundColor = defaultColor;
                }, 500);
            }
            game.usedWords.innerText += inputValue + ', ';
            game.addUsedWordsArray(inputValue);
        }
        game.letterChosen.value = '';
    }
); 
 


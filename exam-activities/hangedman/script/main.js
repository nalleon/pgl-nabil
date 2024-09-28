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
let errorCounter = 0;

/**
 * Function to start the game when the play button is clicked.
 * @param {*} event 
 */
function startGame(event) {
    errorCounter = 0;
    game.usedLettersArray = [];
    game.usedWordsArray = [];
    DOM.wordToGuess.innerHTML = '';
    DOM.usedLetters.innerHTML = '';
    DOM.usedWords.innerHTML = '';
    canvas.drawDefaultCanva();
    let wordPos = game.rndWord(0, game.words.length);
    let wordSelected = game.selectWord(wordPos);
    showWord(wordSelected);
}


/**
 * Function to select the word and show it in the html
 * @param {*} wordPos position of the word in the array
 */

function showWord(wordChosen){
    for (let i = 0; i < wordChosen.length; i++) {
        let letter = document.createElement('span');
        letter.id = i;
        letter.textContent = ' ';
        DOM.wordToGuess.appendChild(letter);
    }
}

DOM.playBtn.addEventListener('click', startGame);

DOM.letterChosen.addEventListener('keyup', (event) => {
    if (errorCounter == 9){
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
                DOM.letterChosen.style.backgroundColor = 'rgb(105, 193, 118)';
                game.correctLetter(userLetter);
                setTimeout(() => {
                    DOM.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);

            } else {
                errorCounter++;
                canvas.selectCanvas(errorCounter);
                DOM.letterChosen.style.backgroundColor = 'rgb(187, 73, 73)';
                setTimeout(() => {
                    DOM.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);
            }
            DOM.usedLetters.innerText += userLetter + ', ';
            game.addUsedLettersArray(userLetter);
        } 

        if (event.target.value.length > 1 ){
            let userWord = event.target.value.toLowerCase();
            if (game.globalWordChosen == userWord) {
                alert("¡HAS GANADO! La palabra era: " + game.globalWordChosen);
                setTimeout(() => {
                    DOM.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);

            } else {
                DOM.letterChosen.style.backgroundColor = 'rgb(187, 73, 73)';
                errorCounter++;
                canvas.selectCanvas(errorCounter);
                setTimeout(() => {
                    DOM.letterChosen.style.backgroundColor = 'rgb(225, 225, 225)';
                }, 500);
            }
            DOM.usedWords.innerText += userWord + ', ';
            game.addUsedWordsArray(userWord);
        }
        DOM.letterChosen.value = '';
    }
}); 

/**
 * 
 */
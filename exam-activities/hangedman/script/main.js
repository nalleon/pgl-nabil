import {Game} from './game.js';
import { Canvas } from './canvas.js';


const DOM = {
    playBtn : document.getElementById('play'),
    wordToGuess : document.getElementById('word'),
    letterChosen : document.getElementById('letterChosen'),
    usedLetters : document.getElementById('usedLetters'),
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
    DOM.wordToGuess.innerHTML = '';
    DOM.usedLetters.innerHTML = '';
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
    if(game.usedLettersArray.includes(event.target.value)){
        return;
    }

    if (event.key == 'Enter') {
        if (event.target.value.length == 1 && game.isLetter(event.target.value)) {
            let userLetter = event.target.value.toLowerCase();

            if (game.globalWordChosen.includes(userLetter)){
                game.correctLetter(userLetter);
            } else {
                errorCounter++;
                canvas.selectCanvas(errorCounter);
            }
            DOM.usedLetters.innerText += userLetter + ', ';
            game.addUsedLettersArray(userLetter);
        } 

        if (event.target.value.length > 1 ){
            let userWord = event.target.value.toLowerCase();
            if (game.globalWordChosen == userWord) {
                alert("¡HAS GANADO! La palabra era: " + game.globalWordChosen);
            } else {
                errorCounter++;
                canvas.selectCanvas(errorCounter);
            }
        }
        DOM.letterChosen.value = '';
    }
}); 

/**
 * 
 */
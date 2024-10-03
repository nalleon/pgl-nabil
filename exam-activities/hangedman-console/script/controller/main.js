const {Game} = require('../model/game');
const prompt = require('prompt-sync')();

const game = new Game();
let hasWon = false;
let restart = true;

function startGame() {
    game.errorCounter = 0;
    game.usedLettersArray = [];
    game.usedWordsArray = [];
    console.log(' ');
    console.log('--------------------H A N G E D M A N----------------------');
    console.log(' ');
    console.log('----------------------------------------------------------');
    console.log(' Guess the word by entering letters. You have 10 attempts ');
    console.log('----------------------------------------------------------');

    let wordPos = game.rndWord(0, game.words.length);
    game.selectWord(wordPos);


    while (!game.isGameOver() && !game.checkIfAllLettersRevealed()){
        
        showResults();

        let userInput = prompt('Enter your guess: ').toLowerCase();
        userInput = game.removeLetterAccent(userInput);
        console.log(' ');

        if(userInput.length == 1 && game.isLetter(userInput)){
            lettersCheck(userInput);
        }   

        if(userInput.length > 1){
            if(wordsCheck(userInput)) {
                hasWon = true;
                break; 
            }
        }

        if (game.isGameOver() || game.checkIfAllLettersRevealed()) {
            endGame();
            
            break;
        }
    }
}

function showResults(){
    console.log(' ');
    console.log('Word to guess: ');
    console.log(game.wordToGuess.join(' '));
    console.log(' ');
    console.log('- Remaining attempts: ' + game.remainingAttempts());
    console.log('- Used letters:'+  game.usedLettersArray);
    console.log('- Used words:'+  game.usedWordsArray);
    console.log(' ');
}


function wordsCheck (userInput){
    if(!game.usedWordsArray.includes(userInput)){
        game.addUsedWordsArray(userInput);         
        
        if(userInput == game.globalWordChosen){
            game.putAllCorrectLettersByWord();
            endGame();
            return true;
        }

        console.log(`Incorrect word guess!`);
        game.errorCounter++;

    } else {
        console.log('Word already used!');
    }
}

function lettersCheck (userInput){
    if(!game.usedLettersArray.includes(userInput)){
        game.addUsedLettersArray(userInput);

        if(game.correctLetter(userInput)){
            console.log('Correct letter: ' + userInput);
        } else {
            console.log('Incorrect letter: ' + userInput);
            game.errorCounter++;
        }

    } else {
        console.log('Letter already used!');
    }
}

function endGame(){
    if(game.checkIfAllLettersRevealed()){
        console.log('Congratulations! You won!');
        return;
    }

    console.log('Game over! You lost!');
    console.log('Word was: ' + game.globalWordChosen);
}

function restartGame(){
    let yesPrompt;
    
    do {
        yesPrompt = prompt('Do you want to play again? (y/n): ').toLowerCase();
    } while(yesPrompt!== 'y' && yesPrompt!== 'n');

    return yesPrompt === 'y';
}

do {
    startGame();
    restart = restartGame();
} while(restart);


 

const DOM = {
    playBtn : document.getElementById('play'),
    wordToGuess : document.getElementById('word'),
    letterChosen : document.getElementById('letterChosen'),
    words : ["esternocleidomastoideo", "paralelepipedo", "otorrinolaringologia", "electrocardiograma", "ornitorrinco"],
    usedLetters : document.getElementById('usedLetters')
}


let globalWordChosen = "";

/**
 * Function to start the game when the play button is clicked.
 * @param {*} event 
 */
function startGame(event) {
    console.log('Play Button Clicked');
    let wordPos = rndWord(0, DOM.words.length);
    showWord(wordPos);
}

DOM.playBtn.addEventListener('click', startGame);


/**
 * Function to select a random word from the array
 * @param {*} minNum array min number of words
 * @param {*} maxNum array max number of words
 * @returns random word position in the array
 */
function rndWord(minNum, maxNum) {
    let valueRanges = maxNum - minNum;
    let rndValue = Math.trunc(Math.random() * valueRanges)+minNum;
    return rndValue;
}

/**
 * Function to select the word and show it in the html
 * @param {*} wordPos position of the word in the array
 */

function showWord(wordPos){
    let wordChosen = DOM.words[wordPos];
    globalWordChosen = wordChosen;

    let wordLength = wordChosen.length;

  //  console.log(wordChosen);
   
  // const wordToGuess = wordChosen.replace(/[a-zA-Z]/g, '_'); // /g --> global, applaies to all regular expressions
  // console.log(wordToGuess); 
    
    for (let i = 0; i < wordLength; i++) {
        let letter = document.createElement('span');
        letter.id = i;
        letter.textContent = ' ';
        DOM.wordToGuess.appendChild(letter);
    }


}

/**
 * Event listener for when the user types a letter and hits enter.
 */

DOM.letterChosen.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        if (event.target.value.length == 1) {
            let userLetter = event.target.value.toLowerCase();
            console.log(globalWordChosen.includes(userLetter));
            if (globalWordChosen.includes(userLetter)){
                 correctLetter(userLetter);
            }

            usedLetters(userLetter);
        } 

        DOM.letterChosen.value = '';
    }
}); 

/**
 * Function to update the word in the HTML based on the correct letters entered by the user.
 * @param {*} userLetter 
 */
function correctLetter(userLetter) {
    let correctIndexes = [];
    const globalWordChosenArray = globalWordChosen.split('');

    globalWordChosenArray.forEach((chosenWordLetter, i) => {
        if (chosenWordLetter == userLetter) {
            correctIndexes.push(i);
        }
    });

    drawWord(userLetter, correctIndexes);
}

/**
 * Fuction to update the used letters in the HTML.
 * @param {*} letter 
 */

function usedLetters(letter) {
    DOM.usedLetters.innerText += letter + ',  ';
}

/**
 * Function to update the word in the HTML based on the correct letters entered by the user.
 * @param {*} letter the letter entered by the user
 * @param {*} indexes index of the letter appaerences to update
 */
function drawWord(letter, indexes){
    console.log(DOM.wordToGuess.getElementsByTagName('span'));
    indexes.forEach(element => {
        DOM.wordToGuess.querySelectorAll('span').forEach(spanElement =>{
                if(element == spanElement.id) {
                    spanElement.textContent = letter;
            }
        })
    });
}


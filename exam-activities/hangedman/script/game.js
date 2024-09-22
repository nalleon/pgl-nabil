const DOM = {
    playBtn : document.getElementById('play'),
    wordToGuess : document.getElementById('word'),
    letterChosen : document.getElementById('letterChosen'),
    words : ["esternocleidomastoideo", "paralelepipedo", "otorrinolaringologia", "electrocardiograma", "ornitorrinco"],
    usedLetters : document.getElementById('usedLetters')
}


let globalWordChosen = "";

function startGame(event) {
    console.log('Play Button Clicked');
    let wordPos = rndWord(0, DOM.words.length);
    _word(wordPos);
}

DOM.playBtn.addEventListener('click', startGame);

function rndWord(minNum, maxNum) {
    let valueRanges = maxNum - minNum;
    let rndValue = Math.trunc(Math.random() * valueRanges)+minNum;
    console.log(rndValue);

    return rndValue;
}

function _word(wordPos){
    let wordChosen = DOM.words[wordPos];
    globalWordChosen = wordChosen
    let wordLength = wordChosen.length;

    console.log(wordChosen);
   
  // const wordToGuess = wordChosen.replace(/[a-zA-Z]/g, '_'); // /g --> global, applaies to all regular expressions
  // console.log(wordToGuess);
    
    for (let i = 0; i < wordLength; i++) {
        let letter = document.createElement('span');
        letter.id = i;
        letter.textContent = ' ';
        DOM.wordToGuess.appendChild(letter);
    }


}

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

function usedLetters(letter) {
    DOM.usedLetters.innerText += letter + ',  ';
}

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
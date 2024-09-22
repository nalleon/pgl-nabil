
const DOM = {
    playBtn : document.getElementById('play'),
    wordToGuess : document.getElementById('word'),
    letterChosen : document.getElementById('letterChosen'),
    words : ["esternocleidomastoideo", "paralelepipedo", "otorrinolaringologia", "electrocardiograma", "ornitorrinco", "olecranon"],
    usedLetters : document.getElementById('usedLetters'),
    canvas : document.getElementById("canvas")
}


let globalWordChosen = "";
let usedLettersArray = [];
let errorsCount = 0;

/**
 * Function to start the game when the play button is clicked.
 * @param {*} event 
 */
function startGame(event) {
    drawCanva();
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
   
  // const wordToGuess = wordChosen.replace(/[a-zA-Z]/g, '_'); // /g --> global, applies to all regular expressions
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
        
            //console.log(globalWordChosen.includes(userLetter));
            if (globalWordChosen.includes(userLetter)){
                correctLetter(userLetter);
            } else {
                errorsCount++;
                selectCanvas(errorsCount);
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

/**
 * Function to draw the hangman canvas based on the number of errors.
 * @param {*} errorNumber 
 */
function selectCanvas(errorNumber){
    switch(errorNumber){
        case 1:
            drawCanvaError1();
            break;
        case 2:
            drawCanvaError2();
            break;
        case 3:
            drawCanvaError3();
            break;
        case 4:
            drawCanvaError4();
            break;
        case 5:
            drawCanvaError5();
            break;
        case 6:
            drawCanvaError6();
            break;
        case 7:
            drawCanvaError7();
            break;
        case 8:
            drawCanvaError8();
            break;
        case 9:
            drawCanvaError9();
            break;
    }
}

/**
 * Default canvas drawing function.
 */
function drawCanva(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    //Dibujando lineas
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(135,400);
    ctx.lineTo(130, 50);

    ctx.stroke();


    ctx.moveTo(135,400);
    ctx.lineTo(130, 50);
}


/**
 * Canvas drawing function for the first error.
 */
function drawCanvaError1(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    //Dibujando lineas
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.stroke();
}

/**
 * Canvas drawing function for the second error.
 */
function drawCanvaError2(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    
    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();
}

/**
 * Canvas drawing function for the third error.
 */

function drawCanvaError3(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
}

/**
 * Canvas drawing function for the fourth error.
 */

function drawCanvaError4(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
    ctx.stroke();
}

/**
 * Canvas drawing function for the fifth error.
 */
function drawCanvaError5(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);

    ctx.moveTo(290,156);
    ctx.lineTo(290, 230);

    ctx.stroke();


}

/**
 * Canvas drawing function for the sixth error.
 */
function drawCanvaError6(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);

    ctx.moveTo(290,156);
    ctx.lineTo(290, 230);
    
    ctx.moveTo(290,159);
    ctx.lineTo(255, 190);

    ctx.stroke();
}

/**
 * Canvas drawing function for the seventh error.
 */
function drawCanvaError7(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);

    ctx.moveTo(290,156);
    ctx.lineTo(290, 230);
    
    ctx.moveTo(290,159);
    ctx.lineTo(255, 190);

    ctx.moveTo(290,159);
    ctx.lineTo(325, 190);

    ctx.stroke();
}

/**
 * Canvas drawing function for the eighth error.
 */
function drawCanvaError8(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);

    ctx.moveTo(290,156);
    ctx.lineTo(290, 230);
    
    ctx.moveTo(290,159);
    ctx.lineTo(255, 190);

    ctx.moveTo(290,159);
    ctx.lineTo(325, 190);

    
    ctx.moveTo(290,229);
    ctx.lineTo(325, 259);

    ctx.stroke();
}

/**
 * Canvas drawing function for the ninth error.
 */
function drawCanvaError9(){
    let ctx = DOM.canvas.getContext('2d');
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,400);
    ctx.lineTo(195, 400);

    ctx.moveTo(130,400);
    ctx.lineTo(130, 50);

    ctx.moveTo(128,50);
    ctx.lineTo(290, 50);

    ctx.moveTo(129,160);
    ctx.lineTo(220, 50);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(163, 83, 83)";
    ctx.lineWidth = 6;

    ctx.moveTo(290,47);
    ctx.lineTo(290, 130);

    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle ="rgb(163, 104, 83)";
    ctx.ellipse(290,143,15,16,0,0, Math.PI*2);

    ctx.moveTo(290,156);
    ctx.lineTo(290, 230);
    
    ctx.moveTo(290,159);
    ctx.lineTo(255, 190);

    ctx.moveTo(290,159);
    ctx.lineTo(325, 190);

    ctx.moveTo(290,229);
    ctx.lineTo(325, 259);

    ctx.moveTo(290,229);
    ctx.lineTo(255, 259);

    ctx.stroke();
}



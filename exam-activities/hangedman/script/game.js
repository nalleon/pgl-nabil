import { Canvas } from './canvas.js';

export class Game{
    constructor(){
        this.words = [
            "esternocleidomastoideo", 
            "paralelepípedo", 
            "otorrinolaringología", 
            "electrocardiograma", 
            "ornitorrinco", 
            "olecrán", 
            "gaseoducto", 
            "trapacería", 
            "ovovivíparo", 
            "desoxirribonucleico", 
            "antihistamínico", 
            "arteriosclerosis", 
            "caleidoscopio", 
            "logicomecanofobia", 
            "ventrílocuo", 
            "tortícolis"
        ];

        this.globalWordChosen = "";
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.wordToGuess = document.getElementById("word");
        this.letterChosen = document.getElementById('letterChosen');
        this.usedLetters = document.getElementById('usedLetters');
        this.usedWords = document.getElementById('usedWords');
        this.errorCounter = 0;
        this.maxErrorsAllowed = 10;
        this.canvas = document.getElementById("canvas");
        this.canvasInstance = new Canvas(this.canvas);
    }

    
    /**
     * Function to start the game
     */	

    startGame(event) {
        this.errorCounter = 0;
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.letterChosen.disabled = false;
        this.wordToGuess.innerHTML = '';
        this.usedLetters.innerHTML = '';
        this.usedWords.innerHTML = '';
        this.canvasInstance.drawDefaultCanvas();
        this.wordToGuess.style.color = 'rgb(225, 225, 225)';
        let wordPos = this.rndWord(0, this.words.length);
        let wordSelected = this.selectWord(wordPos);
        this.showWordSpan(wordSelected);
    }
    
    
    /**
     * Function to select a random word from the array
     * @param {*} minNum array min number of words
     * @param {*} maxNum array max number of words
     * @returns random word position in the array
     */
    rndWord(minNum, maxNum) {
        let valueRanges = maxNum - minNum;
        let rndValue = Math.trunc(Math.random() * valueRanges)+minNum;
        return rndValue;
    }


    /**
     * Function to get the word from the array based on the selected position.
     * @param {*} wordPos of the word
     * @returns word selected
     */
    selectWord(wordPos) {
        let wordChosen = this.words[wordPos];
        this.globalWordChosen = wordChosen; 
        return wordChosen;
    }

    /**
     * Function to  create the span element for each letter in the word and append it to the HTML.
     * @param {*} wordSelected 
     */

    showWordSpan(wordSelected){
        for (let i = 0; i <  wordSelected.length; i++) {
            let letter = document.createElement('span');
            letter.id = i;
            letter.textContent = ' ';
            this.wordToGuess.appendChild(letter);
        }
    }

    /**
     * Function to check if the user input is a letter
     * @param {*} value to check if it's a letter
     * @returns true if the value is a letter, false otherwise.
     */

    isLetter(value) {
        let letterRegExp = /^[a-zA-ZñÑáÁéÉíÍóÓúÚüÜ]$/;
        return letterRegExp.test(value);
    }

    /**
     * Function to update the word in the HTML based on the correct letters entered by the user.
     * @param {*} userLetter 
     */
    correctLetter(userLetter) {
        let correctIndexes = [];
        const globalWordChosenArray = this.globalWordChosen.split('');

        globalWordChosenArray.forEach((chosenWordLetter, i) => {
            if (chosenWordLetter == userLetter) {
                correctIndexes.push(i);
            }
        });

        this.drawWord(userLetter, correctIndexes);
    }
    
    /**
     * Function to reveal the word in the HTML.
     */
    revealWord() {
        const globalWordChosenArray = this.globalWordChosen.split('');
        globalWordChosenArray.forEach((chosenWordLetter, i) => {
            const spanElement = this.wordToGuess.querySelector(`span[id="${i}"]`);
            if (spanElement && !spanElement.textContent.trim()) {
                spanElement.textContent = chosenWordLetter;
            }
        });
    }

    /**
     * Fuction to update the used letters in the HTML.
     * @param {*} letter 
     */

    addUsedLettersArray(letter) {
        this.usedLettersArray.push(letter);
    }

    /**
     * Function to update the used words in the HTML.
     * @param {*} word 
     */

    addUsedWordsArray(word) {
        this.usedWordsArray.push(word);
    }

    /**
     * Function to update the word in the HTML based on the correct letters entered by the user.
     * @param {*} letter the letter entered by the user
     * @param {*} indexes index of the letter appaerences to update
     */
    drawWord(letter, indexes){
        indexes.forEach(element => {
            this.wordToGuess.querySelectorAll('span').forEach(spanElement =>{
                    if(element == spanElement.id) {
                        spanElement.textContent = letter;
                }
            })
        });
    }

    /**
     * Function to check if the all letters of the word had been revealed
     * @returns true if all letters of the word have been revealed, false otherwise.
     */

    checkIfAllLettersRevealed(){
        const globalWordChosenArray = this.globalWordChosen.split('');
        let counter = 0;

        globalWordChosenArray.forEach((chosenWordLetter, i) => {
            const spanElement = this.wordToGuess.querySelector(`span[id="${i}"]`);
            if (spanElement.textContent.trim() == chosenWordLetter) {
                counter++;
            }
        });

        return counter == globalWordChosenArray.length;
    }

    /**
     * Function to disable the input field for letters and words entered by the user.
     */
    disableSendValues(){
        this.letterChosen.disabled = true;
    }

    remainingAttempts(){
        return this.maxErrorsAllowed - this.errorCounter;
    }

}


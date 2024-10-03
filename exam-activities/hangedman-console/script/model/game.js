export class Game{
    constructor(){
        this.words = [
            "esternocleidomastoideo", 
            "paralelepipedo", 
            "otorrinolaringologia", 
            "electrocardiograma", 
            "ornitorrinco", 
            "olecranon", 
            "gaseoducto", 
            "trapaceria", 
            "ovoviviparo", 
            "desoxirribonucleico", 
            "antihistaminico", 
            "arteriosclerosis", 
            "caleidoscopio", 
            "logicomecanofobia", 
            "ventrilocuo", 
            "torticolis"
        ];
        

        this.globalWordChosen = "";
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.wordToGuess = [];
        this.errorCounter = 0;
        this.maxErrorsAllowed = 10;
    }
    
    //TODO: convert to console  

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
        this.wordToGuess = Array(wordChosen.length).fill('_');
        return wordChosen;
    }

    /**
     * Function to  create the span element for each letter in the word and append it to the HTML.
     * @param {*} wordSelected 
     */

    showWord(){
        return this.wordToGuess.join(' ');
    }

    /**
     * Function to check if the user input is a letter
     * @param {*} value to check if it's a letter
     * @returns true if the value is a letter, false otherwise.
     */

    isLetter(value) {
        let letterRegExp = /^[a-zA-ZñÑ]$/;
        return letterRegExp.test(value);
    }


    /**
     * Functino to remove the accents from the user input letter.
     * @param {*} letter to check and remove the accent.
     * @returns letter without accent
     */
    removeLetterAccent(letter){
        switch(letter){
            case 'á':
                return 'a';
            case 'é':
                return 'e';
            case 'í':
                return 'i';
            case 'ó':
                return 'o';
            case 'ú':
                return 'u';
            case 'ü':
                return 'u';
            default:
                return letter;
        }
    }

    /**
     * Function to update the word based on the correct letters entered by the user.
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

        if (correctIndexes.length > 0){
            this.putCorrectLetters(userLetter, correctIndexes);
            return true;
        }

        return false;
    }
    

    /**
     * Fuction to update the used letters in the HTML.
     * @param {*} letter 
     */

    addUsedLettersArray(letter) {
        this.usedLettersArray.push(letter);
        return this.usedLettersArray;
    }

    /**
     * Function to update the used words.
     * @param {*} word 
     */

    addUsedWordsArray(word) {
        this.usedWordsArray.push(word);
        return this.usedWordsArray;
    }

    /**
     * Function to update the word based on the correct letters entered by the user.
     * @param {*} letter the letter entered by the user
     * @param {*} indexes index of the letter appaerences to update
     */
    putCorrectLetters(letter, indexes){
        indexes.forEach(element => {
            this.wordToGuess[element] = letter;
        });

        this.showWord();
    }

    /**
     * Function to put the all the letters in the word
     */

    putAllCorrectLettersByWord() {
        for (let i = 0; i < this.globalWordChosen.length; i++) {
            this.wordToGuess[i] = this.globalWordChosen[i]; 
        }    
    }

    /**
     * Function to check if the all letters of the word had been revealed
     * @returns true if all letters of the word have been revealed, false otherwise.
     */

    checkIfAllLettersRevealed(){
        return !this.wordToGuess.includes('_');
    }

    /**
     * Function to get the remaining attempts to guess the word.
     * @returns number of remaining attempts.
     */
    remainingAttempts(){
        return this.maxErrorsAllowed - this.errorCounter;
    }

    /**
     * Function to check if game is over by having more or the same amount errors than allowed ones.
     * @returns true if game is over, false otherwise
     */
    isGameOver() {
        return this.errorCounter >= this.maxErrorsAllowed;
    }
}


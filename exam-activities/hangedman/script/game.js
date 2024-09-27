export class Game{
    constructor(){
        this.words = ["esternocleidomastoideo", "paralelepipedo", "otorrinolaringologia", "electrocardiograma", "ornitorrinco", "olecranon", "gaseoducto"],
        this.globalWordChosen = "";
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.wordToGuess = document.getElementById("word");
    }

    //TODO: implement an usedWordsArray

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


    selectWord(wordPos) {
        let wordChosen = this.words[wordPos];
        this.globalWordChosen = wordChosen; 
        return wordChosen;
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
     * Fuction to update the used letters in the HTML.
     * @param {*} letter 
     */

    addUsedLettersArray(letter) {
        this.usedLettersArray.push(letter);
    }


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
}
export default class Game {
    private globalWordChosen : string;
    private usedLettersArray : string[];
    private usedWordsArray : string[];
    private wordToGuess : string[];
    private errorCounter : number;
    private readonly MAX_ERRORS_ALLOWED = 10;
    private readonly WORDS = [
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

    constructor(){
        this.globalWordChosen = "";
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.wordToGuess = [];
        this.errorCounter = 0;
    }

    public restartValues(){
        this.globalWordChosen = "";
        this.usedLettersArray = [];
        this.usedWordsArray = [];
        this.wordToGuess = [];
        this.errorCounter = 0;
    }
    
    /**
     * Function to choose a word from the words array
     */
    public chooseWord(){
        const rndWordPos = Math.trunc(Math.random() * this.WORDS.length);
        const rndWord = this.WORDS[rndWordPos];
        this.globalWordChosen = rndWord;
        this.wordToGuess = Array(rndWord.length).fill('_');
    }

    /**
     * Function to check if the value is a letter 
     * @param value to check
     * @returns true if it is, false otherwise
     */
    public checkLetter(value : string){
        const letterRegExp = /^[a-zA-ZÑñ]$/;
        return letterRegExp.test(value);
    }


    /**
     * Function to update the word based on the correct letters entered by the user.
     * @param {*} userLetter 
     */
    public correctLetter(userLetter : string) {
        const checkLetterRegExp = this.checkLetter(userLetter); 
        let correctIndexes : number[] = [];

        if (!checkLetterRegExp) {
            return correctIndexes;
        }

        userLetter = userLetter.trim().toLocaleLowerCase();

        if(this.usedLettersArray.includes(userLetter)){
            return;
        } 

        
        const globalWordChosenArray = this.globalWordChosen.split('');

        globalWordChosenArray.forEach((chosenWordLetter, position) => {
            if (chosenWordLetter == userLetter) {
                correctIndexes.push(position);
            }
        });

        
        if (correctIndexes.length > 0){
            this.putCorrectLetters(userLetter, correctIndexes);
            return;
        }

        this.errorCounter = this.errorCounter+1;
        this.usedLettersArray.push(userLetter);
        return;
    }

    /**
     * Function to update the word based on the correct letters entered by the user
     * @param userLetter to update in the wordToGuess
     * @param correctIndexes to update the positions of WordToGuess
     */
    public putCorrectLetters(userLetter : string, correctIndexes : number[]) : string[]{
        userLetter = userLetter.trim().toLocaleLowerCase();

        correctIndexes.forEach(position => {
            this.wordToGuess[position] = userLetter;
        })

        return this.wordToGuess;
    }

    /**
     * Function to check if the word is correct
     * @param word to check
     * @returns true if the word is correct, false otherwise
     */

    public checkWord(word : string){
        word = word.trim().toLowerCase();

        if(this.usedWordsArray.includes(word)){
            return false;
        } 

        this.usedWordsArray.push(word);         
        
        if(word == this.globalWordChosen){
            this.revealWord();
            return true;
        }

        this.errorCounter = this.errorCounter+1;
        return false;
    }


    /**
     * Function to reveal the word
     */
    public revealWord(){
        for(let i=0; i<this.globalWordChosen.length; i++){
            this.wordToGuess[i] = this.globalWordChosen[i];
        }
    }

    /*
    * Function to check if all letters are revealed/correct
    */
    public checkAllLettersRevealed(){
        return !this.wordToGuess.includes('_');
    }

    /**
     * Function to get the remaining attempts to guess the word.
     * @returns number of remaining attempts.
     */
    public remainingAttempts(){
        return this.MAX_ERRORS_ALLOWED - this.errorCounter;
    }


    /**
     * Function to check if the game is over
     * @returns true if error's counter is equal or greater than max number of errors
     */
    public checkGameOver(){
        return this.errorCounter >= this.MAX_ERRORS_ALLOWED;
    }


    /**
     * Getters and setters
     */
    public getGlobalWordChosen(): string {
        return this.globalWordChosen;
    }

    public setGlobalWordChosen(globalWordChosen: string) {
        this.globalWordChosen = globalWordChosen;
    }

    public getUsedLettersArray(): string[] {
        return this.usedLettersArray;
    }

    public setUsedLettersArray(usedLettersArray: string[]){
        this.usedLettersArray = usedLettersArray;
    }

    public getUsedWordsArray(): string[]{
        return this.usedWordsArray;
    }

    public setUsedWordsArray(usedWordsArray: string[]){
        this.usedWordsArray = usedWordsArray;
    }

    public getWordToGuess() : string []{
        return this.wordToGuess;
    }

    public setWordToGuess(wordToGuess: string[]){
        this.wordToGuess = wordToGuess;
    }

    public getErrorCounter() : number{
        return this.errorCounter;
    }

    public setErrorCounter(errorCounter: number){
        this.errorCounter = errorCounter;
    }


}
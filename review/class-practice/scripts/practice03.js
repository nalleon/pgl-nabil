
const DOM = {
    nums : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
    container : document.getElementById('container')
}

let cells = []
let selectedCells = [];
let valuesUsed = [];
let currentMoves = 0;
let size = 3;

/**
 * Function to create the cells in the grid.
 */
function createCells(){
    for (let i = 0; i < (size**2); i++){
        cells[i] = {
            element : document.createElement('div')
        };

        cells[i].element.className = 'cell';
        DOM.container.appendChild(cells[i].element);
    }
}


/**
 * Function to generate a random number between 1 and size*0.5 (inclusive).
 * This ensures that there are at least two of each number in the grid.
 */
function createNumArray(){
    let randomValues = Math.floor(Math.random() * size * 0.5);
    let values = valuesUsed.filter(value => value === randomValues);

    if (values.length < 2){
        valuesUsed.push(randomValues);
    } else {
        createNumArray();
    }
}



function activate(event){
    if(currentMoves < 2){
    
        if ((!selectedCells[0] || selectedCells[0] !== event.target)){

            selectedCells.push(event.target);
            currentMoves++;

            if(currentMoves == 2){
                if(selectedCells[0].querySelectorAll('.face').innerHTML === 
                selectedCells[1].querySelector('.face').innerHTML){
                    
                    selectedCells = [];
                    currentMoves = 0;
                } else{
                    setTimeout(() => {
                        selectedCells[0].classList.remove('active');
                        selectedCells[1].classList.remove('active');
                        selectedCells = [];
                        currentMoves = 0;
                     }, 600);   
                }
            }
        }
    } 
}

createCells();


function shuffleArray() {
    for (let i = size**2 - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [DOM.nums[i], DOM.nums[j]] = [DOM.nums[j], DOM.nums[i]];
    }
}

shuffleArray();
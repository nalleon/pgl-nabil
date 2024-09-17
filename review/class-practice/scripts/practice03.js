
const DOM = {
    nums : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
}

let cells = []
let selectedCells = [];
let valuesUsed = [];
let currentMoves = 0;
let size = 9;

function gameSize(){
    
}


function createNumArray(){
    let randomValues = Math.floor(Math.random() * size * 0.5);
    let values = valuesUsed.filter(value => value === randomValues);

    if (values.length < 2){
        valuesUsed.push(randomValues);
    } else {
        createNumArray();
    }
}


function createCells(){
    for (let i = 0; i < size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');

        cells.push(cell);
        document.querySelector('.container').append(cells[i])
        createNumArray();
        cells[i].querySelectorAll('.cell')[0].addEventListener(onclick, activate);
    }

}


function activate(event){
    if(currentMoves < 2){
    
        if ((!selectedCells[0] || selectedCells[0] !== event.target)){

            selectedCells.push(event.target);
            currentMoves ++;

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


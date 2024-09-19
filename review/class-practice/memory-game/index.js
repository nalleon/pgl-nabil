const DOM = {
    nums : [1,1,2,2,3,3,4,4],
    container : document.getElementById('container')
}

let size = 3;
let lastCell;
let valuesArray = [];

let counter = 0;
let attempsCount = 0;

function createCells(){
    let grid = document.createElement('div');
    grid.className = 'container';

    for (let i = 0; i < (size**2); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        container.appendChild(cell);
        cell.addEventListener("click", selectedCellsEvent);
    }

}

function shufflePositions() {
    for (let i = (size**2) - 1; i >= 0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = valuesArray[i];
        console.log(temp,j);
        valuesArray[i]= valuesArray[j]; 
        valuesArray[j]= temp;
    }
} 

function fillCells(){
    valuesArray = [];
    let num = 0;
    for (let i =0; i < size**2; i++) {
        if (i % 2 == 0){
            num++;
        }
        valuesArray.push(num);        
    }
    shufflePositions();
    console.log(valuesArray);
}


function selectedCellsEvent(evt) {
    alert("Selected" + evt.target.id);
}

createCells();
fillCells();
shufflePositions();

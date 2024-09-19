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


    /**
    for (let i = 0; i < size**2; i++) {
        cells[i].element.addEventListener('click', () => {
            console.log('test');
            cells[i].element.classList.add('cell-active');
            //lastCell = cells[i];
            clickedCells.push(cells[i]);
            counter++;

            if (clickedCells.length == 2 && clickedCells[0].querySelectorAll('.cell-active')[0].innerHTML == clickedCells[1].querySelectorAll('.cell-active')[1].innerHTML) {
                cells[0].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                cells[0].element.style.fontSize = '50px';

                cells[1].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                cells[0].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';

  
            } else {
                /** 
                setTimeout(() => {
                    clickedCells[0].classList.remove('.cell-active');
                    clickedCells[0].classList.add('.cell');

                    clickedCells[1].classList.remove('.cell-active');
                    clickedCells[1].classList.add('.cell');

                    clickedCells = [];
                    counter = 0;
                }, 1000);
                
            }
        });
    
    }
    */
}

createCells();
fillCells();
shufflePositions();

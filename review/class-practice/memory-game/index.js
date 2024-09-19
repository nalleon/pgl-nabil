const DOM = {
    nums : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
    container : document.getElementById('container')
}

let cells = []
let size = 3;
let lastCell;
let clickedCells = [];
let valuesArray = [];

let counter = 0;
let attempsCount = 0;

function createCells(){
    for (let i = 0; i < (size**2); i++){
        cells[i] = {
            element : document.createElement('div')
        };

        cells[i].element.className = 'cell';
      
        DOM.container.appendChild(cells[i].element);
        cells[i].element.addEventListener("click", selectedCellsEvent);
    }
}


function fillCells(){
    for (let i = 0; i < (size**2); i++) {
        cells[i].element.innerHTML = DOM.nums[i];
    }   
}

function shufflePositions() {
    for (let i = (size**2) - 1; i >= 0; i--) {
        let j = Math.floor(Math.random()*(size**2)+1);
        let temp = cells[i];
        cells[i]= cells[j]; 
        cells[j]= temp;
    }

    for (let i = 0; i < size**2; i++) {
        DOM.container.appendChild(cells[i].element);
    }
} 

function selectedCellsEvent(event) {
    for (let i = 0; i < size**2; i++) {
        cells[i].element.addEventListener('click', () => {
            console.log('test');
            cells[i].element.classList.add('cell-active');
            //lastCell = cells[i];
            clickedCells.push(cells[i]);
            counter++;

            if (clickedCells.length == 2 && clickedCells[0].querySelectirAll('.cell-active')[0].innerHTML == clickedCells[1].querySelectirAll('.cell-active')[1].innerHTML) {
                cells[0].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                cells[0].element.style.fontSize = '50px';

                cells[1].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
    
  
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
                */
            }
        });
    }
}

createCells();
fillCells();
shufflePositions();

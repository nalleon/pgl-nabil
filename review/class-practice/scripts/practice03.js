
const DOM = {
    nums : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
    container : document.getElementById('container')
}

let cells = []
let size = 3;
let sizePx = 250;
let clickedCells = [];
let valuesArray = [];
let counter = 0;
let attempsCount = 0;

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

    document.styleSheets[0].deleteRule(1);
    document.styleSheets[0].insertRule('.container { background-color: #171717;' +
        'width: ' + sizePx + 'px;' + 
        'height: ' + sizePx + 'px;' +
        'grid-template-columns: repeat(' + size + ', 1fr);' +
        'border: 1px solid #171717;;'+
        'margin: auto;'+
        'display: grid;'+
        'gap: 10px;' +
        '}');
        
        
    }

    function rndValues(){
        let rnd = Math.floor(Math.random() * (size**2) * 0.5);
        let values = valuesArray.filter(value => value === rnd);
        if (values.length < 2) {
            valuesArray.push(rnd);
        } else {
            rndValues();
        }
    }

/**
 * Function to shuffle the positions of the cells.
 */
function shufflePositions() {
    for (let i = size**2 - 1; i >= 0; i--) {
        let j = Math.floor(Math.random()*(size**2)+1);
        let temp = cells[i];
        cells[i]= cells[j]; 
        cells[j]= temp;
    }

    DOM.container.innerHTML = '';
    for (let i = 0; i < size**2; i++) {
        DOM.container.appendChild(cells[i].element);
    }
} 


/**
 * Use a set 
 * (int) (cells / 2)
 * set rndNumbers;
 * while (rndNumbers.size() < (int) (cells / 2)) {
 *  rndNumbers.add
 * }
 * 
 * _______
 * 
 * while array.length < cells / 2 {
 *  rnd = aleatoriogen
 * }
 */


function selectedCellsEvent(e) {
    for (let i = 0; i < size**2; i++) {
        cells[i].element.addEventListener('click', () => {
            console.log('test');
            cells[i].element.classList.add('cell-active');

            clickedCells.push(cells[i]);
            counter++;

            if (clickedCells.length == 2 && clickedCells[0].querySelectirAll('.cell-active')[0].innerHTML == clickedCells[1].querySelectirAll('.cell-active')[1].innerHTML) {
                cells[0].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                cells[1].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
            } else {
                setTimeout(() => {
                    clickedCells[0].classList.remove('cell-active');
                    clickedCells[1].classList.remove('cell-active');
                    clickedCells = [];
                    counter = 0;
                }, 1000);
            }
        });
    }
}

createCells();
rndValues();
shufflePositions();
selectedCellsEvent();






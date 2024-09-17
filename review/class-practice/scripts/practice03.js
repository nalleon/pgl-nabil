
const DOM = {
    nums : [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9],
    container : document.getElementById('container')
}

let cells = []
let size = 3;
let sizePx = 250;

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

        
        for (let i = 0; i < Math.floor((size**2)/2); i++){
            let randomNum;
            randomNum = Math.floor(Math.random() * size**2)+1;
            cells[i].element.innerHTML = randomNum;

            cells[size**2 - 1 - i].element.innerHTML = randomNum;
        }

        if (size**2 % 2 != 0) {
            randomNum = Math.floor(Math.random() * size**2)+1;
            cells[Math.floor((size**2)/2)].element.innerHTML = randomNum;
        }
        

    }

/**
 * Function to shuffle the positions of the cells.
 */
function shufflePositions() {
    for (let i = size**2 - 1; i > 0; i--) {
        let j = Math.floor(Math.random()*size**2-1);
        let temp = cells[i];
        cells[i]= cells[j]; 
        cells[j]= temp;
    }

    DOM.container.innerHTML = '';
    for (let i = 0; i < size**2; i++) {
        DOM.container.appendChild(cells[i].element);
    }
} 



function selectedCellsEvent() {
    let clickedCells = [];

    for (let i = 0; i < size**2; i++) {
        cells[i].element.addEventListener('click', () => {
            cells[i].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
            cells[i].element.style.fontSize = '40px';   

            clickedCells.push(cells[i]);

            if (clickedCells.length == 2 && clickedCells[0].innerHTML == clickedCells[1].innerHTML) {
                cells[0].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                cells[1].element.style.backgroundColor = 'rgba(231, 132, 96, 0.8)';
                    
            } else {
                cells[0].element.style.backgroundColor = '';
                cells[0].element.style.fontSize = '0px';      
                cells[1].element.style.backgroundColor = '';
                cells[1].element.style.fontSize = '0px';        
            }
                clickedCells = [];
        });
    }
}

createCells();
shufflePositions();
selectedCellsEvent();






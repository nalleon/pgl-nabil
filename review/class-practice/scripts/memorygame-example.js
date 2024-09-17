/**
 * Logic
 */

let value;

function createGame(){
    let game = document.createElement("div");
    game.classList.add("game");
    for(let i=1; i<9; i++){
        let cell = document.createElement("div");
        cell.id("call"+1);
        value.innerHTML = i;
        game.appendChild(cell);
        cell.addEventListener("click", showCells);

    }
}

function showCells(event){
    alert("" + event.target.id);
}


/**
 * Sort: 
 */


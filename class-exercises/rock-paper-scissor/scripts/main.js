import { Game } from './game.js';

const DOM = {
    btn: document.getElementById('btn'),
}

const game = new Game();

function startGame() {
    let userValue = game.obtainUserValue();
    game.compareElements(userValue);
}


DOM.btn.addEventListener('click', startGame);
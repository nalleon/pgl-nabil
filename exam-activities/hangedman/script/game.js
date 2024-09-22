const DOM = {
    playBtn : document.getElementById('play'),
    letterChosen : document.getElementById('letterChosen'),
    words : ["esternocleidomastoideo", "paralelepípedo", "otorrinolaringología", "electrocardiograma", "ornitorrinco"]
}


function startGame(event) {
    console.log('Play Button Clicked');
    rndWord(0, DOM.words.length);
}

DOM.playBtn.addEventListener('click', startGame);

function rndWord(minNum, maxNum) {
    let valueRanges = maxNum - minNum;
    let rndValue = Math.trunc(Math.random() * valueRanges)+minNum; ¡
    console.log(rndValue);
}

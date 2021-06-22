var img = document.getElementById('mario');
var div = document.querySelector('div');
var x = 0;

function moveMario() {
    img.src = './mario_running.gif';
}

function moveImg() {
    div.style.backgroundPositionX = x + 'px ';
    x -= 100;
}

function imgToPng() {
    img.src = 'mario.png';
}

function moveBg() {
    interval = setInterval(moveImg, 100);
    moveMario();
}

document.addEventListener("keydown", event => {
    if (event.keyCode === 39) {
        moveBg();
    }
});

function stopMarioRunning() {
    imgToPng();
    if(interval) {
        clearInterval(interval);
    }
    interval = undefined;
}

document.addEventListener('keydown', event => {
    if(event.code === 'Space') {
        stopMarioRunning();
    }
});
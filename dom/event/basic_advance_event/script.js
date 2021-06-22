var buttons = document.querySelectorAll('button');
var body = document.querySelector('body');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var interval;

button1.addEventListener('click', function toggleBackgroundColor() {
    body.classList.toggle('blue_bg');
});

function turnOff() {
    if (!interval) {
        button2.textContent = 'Turn Off';
        interval = setInterval(toggleBackgroundColor, 500)
    } else {
        button2.textContent = 'Turn on';
        clearInterval(interval);
        interval = undefined;
    }
};

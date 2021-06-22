var button = document.querySelector('button');
var textarea = document.querySelector('textarea');
var input = document.querySelector('input');


button.addEventListener('click', function sendMessage() {
    textarea.value += input.value + '\n';
    input.value = '';
})
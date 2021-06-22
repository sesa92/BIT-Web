function redBorders() {
    var input = document.querySelectorAll('input');
    console.log(input);
    input.forEach(e => {
        console.log(e);
        if (e.hasAttribute("required") &&  e.value == '') {
            e.style.borderStyle = 'solid 5px';
            e.style.borderColor = 'red';
        } 
    })
}


redBorders();
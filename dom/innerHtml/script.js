function dropDown(arrayOfStrings, node) {
    var selectEl = document.createElement('select');
    arrayOfStrings.forEach(e => {
        var optionEl = document.createElement('option');
        optionEl.innerHTML = e;
        selectEl.appendChild(optionEl);
    })
    node.appendChild(selectEl);
}

var divs = document.querySelectorAll('div');

dropDown(['Jabuke', 'Tresnje', 'Jagode'], divs[0]);
dropDown(['JavaScrpit', 'C++', 'Python'], divs[divs.length - 1]);


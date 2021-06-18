var li = document.querySelector('ul li');

function alertLi(li) {
    var textLi = li.textContent;
    alert(textLi);
}

alertLi(li);



function replaceText(text) {
    var ul = document.querySelector('ul');
    ul.lastElementChild.textContent = text;
}

replaceText('Some text');
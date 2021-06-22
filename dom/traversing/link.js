// 1. primer

// function liClass () {
//     var li1 = document.querySelector('.active');
//     li1.removeAttribute('class');
    

//     var ulParent = li1.parentElement;
//     var divParent = ulParent.parentElement;
//     var divPreviousSibling = divParent.previousElementSibling;
//     var ulChild = divPreviousSibling.children;
//     var liChilds = ulChild[0].children[0];
//     liChilds.className = "active";
// }

// liClass();

// 2. primer

// function liClass () {
//     var li1 = document.querySelector('.active');
//     li1.removeAttribute('class');
    

//     var firstUlLi = document.querySelector('li');
//     firstUlLi.className = "active";


// }

// liClass();

// 3. primer

function liClass () {
    var li1 = document.querySelector('.active');
    li1.removeAttribute('class');
    

    var firstUl = document.querySelectorAll('ul');
    firstUl[0].firstElementChild.className = "active";
  

}

liClass();
//#1. Napraviti promenljivu unorderedList i u nju smestiti HTML element <ul> sa ID-em 'list'. Logovati ovaj element u konzoli

var unorderedList = document.querySelector('ul#list');
console.log(unorderedList);

// #2. Logovati u konzoli prvi child element unutar unorderedList

// opcija -> console.log(unorderedList.firstElementChild);
console.log(unorderedList.children[0]);

// #3. Proći kroz sve child-ove elementa unorderedList i logovati ih u konzoli

for (var child of unorderedList.children) {
    console.log(child);
  }

// #4. Izmeniti tekst prvog <li> elementa u "First item (edited)"

unorderedList.children[0].textContent = 'First item (edited)';

//contains
var div = document.querySelector('#content');
div.classList.contains('info');

// #5. Izmeniti tekst poslednjeg <li> elementa u "Last item (edited)". Uraditi ovo tako da ne zavisi od broja elemenata u <ul> (tj. program bi trebalo da radi bez obzira koliko <li> elementa postoji u listi)

// unorderedList.children[unorderedList.children.length - 1].textContent = 'Last item (edited)';

unorderedList.lastElementChild.textContent = 'Last item (edited)';

// #6. Pomoću funkcije document.createElement napraviti novi <li> element, postaviti mu textContent na neki tekst po vašem izboru i logovati taj element u konzoli

var newLi = document.createElement('li');
newLi.textContent = 'Forth item';
console.log(newLi);

// #7. Pomoću funkcije appendChild dodati kreirani <li> element u listu

unorderedList.appendChild(newLi);

// #8. Pronaći <div> element sa ID-em 'greeting' i postaviti mu tekst 'Hello!'

var div = document.querySelector('#greeting');
div.textContent = 'Hello';

// #9. Na <body> element dodati klasu 'body-class'

document.body.classList.add('body-class');

//#10. Logovati u konzoli src atribut prve slike (<img> elementa) na stranici

var image = document.querySelector('img');
console.log(image.src);

// #11. Logovati kroz petlju sve <div>-ove na stranici

var div = document.querySelectorAll('div');
for (var el of div) {
  console.log(el);
}

// #12. Pronaći sve elemente sa klasom 'remove-this-class', i ukloniti je sa tih elemenata

var elementsWithClass = document.querySelectorAll('.remove-this-class');
console.log(elementsWithClass);
for (var element of elementsWithClass) {
  element.classList.remove('remove-this-class');
}

/* #13. Kroz program napraviti novi <script> element, čiji sadržaj treba da bude sledeći kod:
`console.log("This is the log");`
Dodati ga u <body>, u konzoli treba da se pojavi ispis "This is the log"*/

var script = document.createElement('script');
script.textContent = 'console.log("This is the log");'
document.body.appendChild(script);

// #14. Za svaku sliku na stranici, napraviti link (<a> element) koji vodi na adresu te slike, i kao tekstualni sadržaj ima istu tu adresu. Ovi linkovi se mogu dodati direktno u <body> element, nezavisno od slika

var images = document.querySelectorAll('img');
for (var image of images) {
  var link = document.createElement('a');
  link.href = image.src;
  link.textContent = image.src;
  document.body.appendChild(link);
}

//#15 Promeniti kod prethodne vežbe, tako da klik na linkove otvara novi tab/prozor (postaviti HTML atribut target="_blank")

var images = document.querySelectorAll('img');
for (var image of images) {
  var link = document.createElement('a');
  link.href = image.src;
  link.textContent = image.src;
  link.target = '_blank';
  document.body.appendChild(link);
}
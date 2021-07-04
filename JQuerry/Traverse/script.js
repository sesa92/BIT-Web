$( "<div class='div1'></div>" ).appendTo( "body" );
$( "<div class='div2'></div>" ).appendTo( "body" );

var images = [
    '<img = src = "./images/girafe.jfif">', 
    '<img = src = "./images/lion.jfif">', 
    '<img = src = "./images/tiger.jfif">', 
];

var images2 = [
    '<img = src = "./images/tiger.jfif">',
    '<img = src = "./images/lion.jfif">',
    '<img = src = "./images/girafe.jfif">'
];

$(images).each(function(index, element) {
    $('.div1').prepend(element);
});

$(images2).each(function(index, element) {
    $('.div2').prepend(element);
});

$('img').each(function(index, element) {
    var imgWidth = 33 + '%';
    $(element).width(imgWidth);
})

var imgLength = $('.div1 img').length;
var random = Math.floor( Math.random() * imgLength);
$('.div1 img').eq(random).addClass('selected')

// 1. nacin
// var a = $($($('.selected').parent()).next()).children().length;
// console.log(a);

// 2. nacin
// var parentDiv = $('.selected').parent();
// var nextSib = $(parentDiv).next();
// var nextSibChildren = $(nextSib).children();
// var indexMiddleChildren = Math.floor(($(nextSibChildren).children().length)/2);


// console.log(parentDiv);
// console.log(nextSib);
// console.log(indexMiddleChildren);

$('.selected').on('click', function removeAddColor() {

        var parentDiv = $('.selected').parent();
        var nextSib = $(parentDiv).next();
        var nextSibChildren = $(nextSib).children();
        var indexMiddleChildren = Math.floor(($(nextSib).children().length)/2);

        if ($('.div1 img').hasClass('selected')) {
            $('.div1 img').removeClass('selected');
            $(nextSibChildren).eq(indexMiddleChildren).addClass('selected');
            console.log($(nextSibChildren).eq(indexMiddleChildren));
            console.log(indexMiddleChildren);
    }
});

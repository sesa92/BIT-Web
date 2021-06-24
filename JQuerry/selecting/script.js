$(function() {
    console.log("Hello!");

    $('li:first').css('border-bottom', 'solid 1px red');
    $('li').css('textTransform', 'uppercase');
    $('li.active').css('color', 'blue');
    var a = Math.floor($('li').length/2);
    $('li').eq(a).css('background', 'red');

});

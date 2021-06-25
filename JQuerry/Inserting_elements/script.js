var div = $('<div>');
$('body').prepend('<div>');

var images = [
    '<img = src = "./images/girafe.jfif">', 
    '<img = src = "./images/lion.jfif">', 
    '<img = src = "./images/tiger.jfif">', 
    '<img = src = "./images/girafe.jfif">', 
    '<img = src = "./images/lion.jfif">', 
    '<img = src = "./images/tiger.jfif">',
    '<img = src = "./images/girafe.jfif">', 
    '<img = src = "./images/lion.jfif">', 
    '<img = src = "./images/tiger.jfif">'
];

$(images).each(function(index, element) {
    $('div').prepend(element);
});
$('div').before('Gallery')

function randomNumber() {
    return Math.floor(Math.random() * 400 + 50);
}

$('img').each(function(index, element) {
    $(element).height(randomNumber() + 'px');
    $(element).width(randomNumber() + 'px');
 
});

$('img').each(function(index, element) {
    if ($(element).width() < 200) {
        $(element).css("border","10px solid #000");
    } 
    else {
        return false;
    }
});





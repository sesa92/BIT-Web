$('<button>Add</button>').appendTo('body');


$('button').on('click', function addImage() {
    var request = $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
    });

    request.done(function(response) {
    var img = $("<img/>").attr("src", response.message);
    $('body').append(img);
    
    $(img).appendTO('body');
    })
})

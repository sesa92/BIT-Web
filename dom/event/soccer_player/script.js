// var img1 = document.getElementById('img1');
// var img2 = document.getElementById('img2');
// var button = document.querySelector('button');

// var obj = {
//     movePlayer: function (e) {
//         var newX = e.clientX - 20;
//         var newY = e.clientY - 20;
          
//         img2.style.left = newX + "px";
//         img2.style.top = newY + "px";
//     }
// };

// img1.addEventListener('click', obj.movePlayer
// );


// button.addEventListener('click', function stopPlayer() {
//     img1.removeEventListener('click', obj.movePlayer);
// });

// With Jquerry

var img1 = '<img id = "img1" src= "./field.png" style="position: relative;">';

var img2 = '<img id = "img2" src= "./player.png" width="50px" style="position: absolute; left: 0px">';

var button = '<button>Disable</buton>'

$('body').append(img1, img2, button);

var obj = {
        movePlayer: function (e) {
            var newX = e.clientX - 20;
            var newY = e.clientY - 20;
              
            $('#img2').css('left', + newX + 'px');
            $('#img2').css('top', + newY + 'px');
        }
    };

$('#img1').on('click', obj.movePlayer);

$("button").click(function(){
    $("#img1").off();
});






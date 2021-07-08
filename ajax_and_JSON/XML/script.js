$("<p id='countryName'></p>" ).appendTo("body");
$("<button id='btn'>Send</button></br>" ).appendTo("body");
$("<input id='ipAdress'></input>" ).appendTo("body");




// request.onload = function() {
//     var response = request.responseXML;
//     var country = response.querySelector('geoplugin_countryName').textContent;
//     $('#countryName').text(country);
// }

$('#btn').on('click', function getIpAdress() {

    var request = new XMLHttpRequest();
    request.open("GET", "location.xml");
    request.send();

    request.onload = function() {
    var response = request.responseXML;
    var country = response.querySelector('geoplugin_countryName').textContent;
    $('#countryName').text(country);

    var newIp = response.querySelector('geoplugin_request').textContent;
    $('#ipAdress').val(newIp);

    }
})



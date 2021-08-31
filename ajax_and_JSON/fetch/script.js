$(document).ready(() => {
    const chuckNorrisUrl = "https://api.chucknorris.io/jokes/random";
    const button = $('#btn')
    const div = $('#div');

    const chuckNorris = () => {
    fetch(chuckNorrisUrl).then(response => response.json()).then(data => {
            div.html('').append(`<p>${data.value}</p>`);
        })
    }
    button.on('click', chuckNorris);
})



function openGoogle() {
    var win = window.open('https://google.com');

    setTimeout(function name() {
        win.close();
    }, 4000);
    
}

openGoogle();

function alertPromptConfirm() {
    alert("Hello world");
    var userInput = prompt('Super fancy question?');
    console.log(userInput);
    var yesNo = confirm("29. maja je Zvezda pobedila");
    console.log(yesNo);
    function foo() { 
        console.log('foo');
    }
    var fooIntervalId = setInterval(foo, 2000);
    setTimeout(function() {
        clearInterval(fooIntervalId);
        console.log("clear");
    }, 2000);
}

alertPromptConfirm();
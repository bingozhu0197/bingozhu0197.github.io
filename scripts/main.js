//author: zhubinbin.china@gmail.com
var myHeading = document.querySelector('h1');

var startButton;
var count = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createEquation() {
    a = getRandomInt(0, 10);

    if (getRandomInt(0, 1))
    {
        op = " + ";
        b = getRandomInt(0, 20 - a);
        answer = a + b;
    }
    else
    {
        op = " - ";
        b = getRandomInt(0, a);
        answer = a - b;
    }
    myHeading.textContent = a.toString() + op + b.toString() + " = ";
    count++;
}


function createNextButton() {
    nextButton = document.createElement("BUTTON");                       // Create a <p> element
    var t2 = document.createTextNode("Next");                                // Create a text node
    nextButton.appendChild(t2);                                           // Append the text to <p>
    nextButton.style.width = "600px";
    nextButton.style.height = "150px";
    nextButton.style.backgroundColor = "lightblue";
    nextButton.style.fontSize = "100px";
    nextButton.onclick = function(){createEquation()};
    document.body.appendChild(nextButton);                              // Append <p> to <body>
}

function summarize(){
    alert(count);
    myHeading.textContent = ""
    nextButton.style.display = "none"
    createStartButton();
}

function home(){
    startButton.style.display = "none"
    createEquation();
    setTimeout(function() {summarize();}, 60000);
    createNextButton();
}

function createStartButton() {
    startButton = document.createElement("BUTTON");
    var t = document.createTextNode("Start");
    startButton.appendChild(t);
    startButton.style.width = "200px";
    startButton.style.height = "200px";
    startButton.style.backgroundColor = "lightgreen";
    startButton.style.fontSize = "50px";
    startButton.onclick = function(){home();};
    document.body.appendChild(startButton);
}

createStartButton();

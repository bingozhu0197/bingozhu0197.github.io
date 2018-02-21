//author: zhubinbin.china@gmail.com
var myHeading = document.querySelector('h1');

var startButton;
var count = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createEquation() {
    operatorRand = getRandomInt(0, 3) % 3;
    if (operatorRand == 1)
    {
        a = getRandomInt(0, 100);
        op = " + ";
        b = getRandomInt(0, 100 - a);
        answer = a + b
    }
    else if (operatorRand == 2)
    {
        a = getRandomInt(0, 100);
        op = " - ";
        b = getRandomInt(0, a);
        answer = a - b;
    }
    else
    {
        a = getRandomInt(0, 9);
        op = " X ";
        b = getRandomInt(0, 9);
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
    count = 0;
    createStartButton();
}

function home(){
    startButton.style.display = "none"
    createEquation();
    setTimeout(function() {summarize();}, 300000);
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

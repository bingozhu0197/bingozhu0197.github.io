//author: zhubinbin.china@gmail.com
var myHeading = document.querySelector('h1');
var a, op, b, answer;
var right = 0;
var interval;
var startButton;
var numberButton = new Array(11);
var numberButtonDispaly
var record = new Array();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createEquation() {
    a = getRandomInt(0, 10);

    if (getRandomInt(0, 1))
    {
        op = "+";
        b = getRandomInt(0, 10 - a);
        answer = a + b;
    }
    else
    {
        op = "-";
        b = getRandomInt(0, a);
        answer = a - b;        
    }
    myHeading.textContent = a.toString() + op + b.toString() + " = ";
}

function checkSum(number) {
    if (answer == number)
    {
        right++;
        myHeading.textContent += number.toString();
    }
    else
    {
        myHeading.textContent += number.toString();
        myHeading.textContent += "X";
    }

    record.push(myHeading.textContent);
    myHeading.textContent
    createEquation();
    return ;
}

function createButton(number) {
    numberButton[number] = document.createElement("BUTTON");                       // Create a <p> element
    var t = document.createTextNode(number.toString());       // Create a text node
    numberButton[number].appendChild(t);                                          // Append the text to <p>
    numberButton[number].style.width = "100px";
    numberButton[number].style.height = "100px";
    numberButton[number].style.backgroundColor = "lightblue";
    numberButton[number].style.fontSize = "50px";
    numberButton[number].onclick = function(){checkSum(number)};
    numberButtonDispaly = numberButton[i].style.display
    document.body.appendChild(numberButton[number]);                              // Append <p> to <body>
}

function createNumberButtons(){
    for (i = 0; i <= 10; i++)
    {
        createButton(i);
    }      
}

function hidenNumberButtons() {
    for (i = 0; i <= 10; i++)
    {
        numberButton[i].style.display = "none";
    }
}
function showNumberButtons() {
    for (i = 0; i <= 10; i++)
    {
        numberButton[i].style.display = numberButtonDispaly;
    }
}

function displayResult() {
    hidenNumberButtons();
    startButton.style.display = "block";
    myHeading.textContent = "Right: " + right.toString();
    var list = document.getElementById('result');
    for (i = 0; i < record.length; i++)
    {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(record[i]));
        list.appendChild(entry);
    }
}

function main(){
    right = 0;
    removeResult();
    record = [];
    showNumberButtons();
    createEquation();
    startButton.style.display="none"
    setTimeout(function() {displayResult();}, 60000);
}

function createStart() {
    startButton = document.createElement("BUTTON"); 
    var t = document.createTextNode("Start");
    startButton.appendChild(t);
    startButton.style.width = "100px";
    startButton.style.height = "100px";
    startButton.style.backgroundColor = "lightgreen";
    startButton.style.fontSize = "25px";
    startButton.onclick = function(){main();};
    document.body.appendChild(startButton);
}

function removeResult() {
    var list = document.getElementById("result");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

createStart();
createNumberButtons();
hidenNumberButtons();

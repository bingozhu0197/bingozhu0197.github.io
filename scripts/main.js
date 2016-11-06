//author: zhubinbin.china@gmail.com
var myHeading = document.querySelector('h1');
var a, op, b, answer;
var right = 0;
var wrong = 0;
var pass = 0;
var interval;
var startButton;
var numberButton = new Array(11);
var numberButtonDispaly
var record = new Array();
var BUTTONS = 12
var last
var equationListButton

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
    if (last == myHeading.textContent){
        createEquation();
        return;
    }
    last = myHeading.textContent;
}

function createEquationList() {
    //equationListButton.style.display = "none";
    //startButton.style.display = "none";
    removeResult();
    record = []
    for (i = 0; i < 60; i++)
    {
        createEquation();
        record.push(last);
    }
    myHeading.textContent = ""
    var list = document.getElementById('result');
    for (i = 0; i < record.length; i++)
    {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(record[i]));
        list.appendChild(entry);
    }
}

function checkSum(number) {
    if (answer == number) {
        right++;
        myHeading.textContent += number.toString();
    }
    else if (number == BUTTONS -1){
        myHeading.textContent += "Pass";
        pass++;
    }
    else {
        myHeading.textContent += number.toString();
        myHeading.textContent += "   X";
        wrong++;
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
    numberButton[number].style.width = "150px";
    numberButton[number].style.height = "150px";
    numberButton[number].style.backgroundColor = "lightblue";
    numberButton[number].style.fontSize = "100px";
    numberButton[number].onclick = function(){checkSum(number)};
    numberButtonDispaly = numberButton[i].style.display
    document.body.appendChild(numberButton[number]);                              // Append <p> to <body>
}

function createPassButton(number) {
    numberButton[number] = document.createElement("BUTTON");                       // Create a <p> element
    var t = document.createTextNode("P");       // Create a text node
    numberButton[number].appendChild(t);                                          // Append the text to <p>
    numberButton[number].style.width = "150px";
    numberButton[number].style.height = "150px";
    numberButton[number].style.backgroundColor = "lightblue";
    numberButton[number].style.fontSize = "100px";
    numberButton[number].onclick = function(){checkSum(number)};
    numberButtonDispaly = numberButton[i].style.display
    document.body.appendChild(numberButton[number]);                              // Append <p> to <body>
}

function createNumberButtons(){
    for (i = 0; i < BUTTONS - 1; i++)
    {
        if (i == BUTTONS / 2)
        {
            document.write("<br/>")        
        }
        createButton(i);
    }
    createPassButton(BUTTONS - 1);
}

function hidenNumberButtons() {
    for (i = 0; i < BUTTONS; i++)
    {
        numberButton[i].style.display = "none";
    }
}
function showNumberButtons() {
    for (i = 0; i < BUTTONS; i++)
    {
        numberButton[i].style.display = numberButtonDispaly;
    }
}

function displayResult() {
    hidenNumberButtons();
    startButton.style.display = "block";
    myHeading.textContent = "Right: " + right.toString() + "  ";
    myHeading.textContent += "Wrong: " + wrong.toString() + "   ";
    myHeading.textContent += "Pass: " + pass.toString() + "   ";    
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
    wrong = 0;
    pass = 0;
    removeResult();
    record = [];
    showNumberButtons();
    createEquation();
    startButton.style.display="none"
    equationListButton.style.display="none"
    setTimeout(function() {displayResult();}, 60000);
}

function createStart() {
    startButton = document.createElement("BUTTON"); 
    var t = document.createTextNode("Start");
    startButton.appendChild(t);
    startButton.style.width = "200px";
    startButton.style.height = "200px";
    startButton.style.backgroundColor = "lightgreen";
    startButton.style.fontSize = "50px";
    startButton.onclick = function(){main();};
    document.body.appendChild(startButton);
}

function createEquationListButton() {
    equationListButton = document.createElement("BUTTON"); 
    var t = document.createTextNode("Create");
    equationListButton.appendChild(t);
    equationListButton.style.width = "200px";
    equationListButton.style.height = "200px";
    equationListButton.style.backgroundColor = "lightgreen";
    equationListButton.style.fontSize = "50px";
    equationListButton.onclick = function(){createEquationList();};
    document.body.appendChild(equationListButton);
}

function removeResult() {
    var list = document.getElementById("result");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

createStart();
createEquationListButton();
createNumberButtons();
hidenNumberButtons();
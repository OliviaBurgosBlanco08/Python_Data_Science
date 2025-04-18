//let title = document.querySelector('h1');
//title.innerHTML = 'Secret number game';

//let paragraph = document.querySelector('p');
//paragraph.innerHTML = 'Indicates a number from 1 to 10';

let secretNumber = 0;
let attempts = 0;
let listNumbersDrawn = [];
let maximumNumber = 10;
//console.log(secretNumber);

function assignTextElement(element, text) {
  let htmlElement = document.querySelector(element);
  htmlElement.innerHTML = text;
  return;
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById("userValue").value);

  if (userNumber === secretNumber) {
    assignTextElement(
      "p",
      `You guessed the number in ${attempts} ${
        attempts === 1 ? "time" : "times"
      } ...!👌`
    );
    document.getElementById("restart").removeAttribute("disabled");
  } else {
    //The user did not get it right
    if (userNumber > secretNumber) {
      assignTextElement("p", "The secret number is less..! 😓");
    } else {
      assignTextElement("p", "The secret number is greater..! 😓");
    }
    attempts++;
    cleanBox();
  }

  return;
}

//Clean the box
function cleanBox() {
  document.querySelector("#userValue").value = "";
}

function generateSecretNumber() {
  let generatedNumber = Math.floor(Math.random()*maximumNumber)+1;

  console.log(generatedNumber);
  console.log(listNumbersDrawn);
  //If we have already drawn all the numbers
  if(listNumbersDrawn.length == maximumNumber){
    assignTextElement('p', 'All possible numbers have already been drawn');
  }else{
  
  //If the generated number is included in the list
  if(listNumbersDrawn.includes(generatedNumber)){
    return generateSecretNumber();
  }else{
    listNumbersDrawn.push(generatedNumber);
    return generatedNumber;
e  }
}
}

function initialConditions() {
  assignTextElement("h1", "Secret number game 😎");
  assignTextElement('p', `Indicates a number from 1 ${maximumNumber} 😊`);
  secretNumber = generateSecretNumber();
  attempts = 1;
}

function restartGame() {
  //Clear box
  cleanBox();
  //Indicate number range message
  //Generate the random number
  //Initialize the number of attempts
  initialConditions();
  //Disable the new game button
  document.querySelector("#restart").setAttribute("disabled", "true");
}

initialConditions();

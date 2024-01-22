let outcome = document.getElementById("outcomeText");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let tie = document.getElementById("ties");
let wins = 0;
let ties = 0;
let losses = 0;

function getComputerChoice(i = Math.floor(Math.random() * 3) + 1) {
  if (i == 1) {
      return "rock";
  }

  if (i == 2) {
      return "paper";
  }

  if (i == 3) {
      return "scissors";
  }
}

document.getElementById("rockButton").addEventListener("click", rockCount);
function rockCount() {
  let computerSelection = getComputerChoice();
  if (computerSelection == "rock") {
    ties++;
    outcome.innerHTML = "You have both tied with Rock!";
    tie.innerHTML = ties;  
  }
  
  else if (computerSelection == "paper") {
    losses++;
    outcome.innerHTML = "You have lost to paper";
    computer.innerHTML = losses;
  }

  else if (computerSelection == "scissors") {
    wins++;
    outcome.innerHTML = "You have won against scissors";
    player.innerHTML = wins;
  }

  else {
    outcome.innerHTML = "ERROR";
  }
} 

document.getElementById("paperButton").addEventListener("click", paperCount);
function paperCount() {
  let computerSelection = getComputerChoice();
  if (computerSelection == "paper") {
    ties++;
    outcome.innerHTML = "You have both tied with Paper!";
    tie.innerHTML = ties;  
  }
  
  else if (computerSelection == "scissors") {
    losses++;
    outcome.innerHTML = "You have lost to scissors";
    computer.innerHTML = losses;
  }

  else if (computerSelection == "rock") {
    wins++;
    outcome.innerHTML = "You have won against Rock";
    player.innerHTML = wins;
  }

  else {
    outcome.innerHTML = "ERROR";
  }
}

document.getElementById("scissorButton").addEventListener("click", scissorCount);
function scissorCount() {
  let computerSelection = getComputerChoice();
  if (computerSelection == "scissors") {
    ties++;
    outcome.innerHTML = "You have both tied with Scissors!";
    tie.innerHTML = ties;  
  }
  
  else if (computerSelection == "rock") {
    losses++;
    outcome.innerHTML = "You have lost to Rock";
    computer.innerHTML = losses;
  }

  else if (computerSelection == "paper") {
    wins++;
    outcome.innerHTML = "You have won against Paper";
    player.innerHTML = wins;
  }

  else {
    outcome.innerHTML = "ERROR";
  }
}

document.getElementById("resetButton").addEventListener("click", resetFunc);
function resetFunc(){
  wins = 0;
  losses = 0;
  ties = 0;
  player.innerHTML = wins;
  computer.innerHTML = losses;
  tie.innerHTML = ties;
}

function buttonChange() {
  var chg = document.getElementById("colorChangeId");
  chg.style.color = 'red';
}
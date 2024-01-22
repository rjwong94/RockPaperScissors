let rock = 0;
let paper = 0;
let scissors = 0;

let outcome = document.getElementById("outcomeText");
let wins = document.getElementById("player");
let loss = document.getElementById("computer");


document.getElementById("rockButton").addEventListener("click", rockCount);
function rockCount() {
  rock++;
  outcome.innerHTML = "rock count is " + rock;
}

document.getElementById("paperButton").addEventListener("click", paperCount);
function paperCount() {
  paper++;
  outcome.innerHTML = "paper count is " + paper;
}

document.getElementById("scissorButton").addEventListener("click", scissorCount);
function scissorCount() {
  scissors++;
  outcome.innerHTML = "scissor count is " + scissors;
}

function buttonChange() {
  var chg = document.getElementById("colorChangeId");
  chg.style.color = 'red';
}
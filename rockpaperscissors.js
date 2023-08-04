let a = "rock";
let b = "paper";
let c = "scissors";
let playerSelection = "rock";
let computerSelection;

function getComputerChoice(i = Math.floor(Math.random() * 3) + 1) {
    if (i == 1) {
        computerSelection = a;
    }

    if (i == 2) {
        computerSelection = b;
    }

    if (i == 3) {
        computerSelection = c;
    }

    return computerSelection;
}



console.log(getComputerChoice())
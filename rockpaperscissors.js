let a = "rock";
let b = "paper";
let c = "scissors";
let playerSelection = "rock";

function getComputerChoice(i = Math.floor(Math.random() * 3) + 1) {
    if (i == 1) {
        return a;
    }

    if (i == 2) {
        return b;
    }

    if (i == 3) {
        return c;
    }
}

let computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
    
}

console.log(getComputerChoice())
let a = "rock";
let b = "paper";
let c = "scissors";
let playerSelection = "paper";

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
    if (playerSelection == computerSelection) {
        return playerSelection + " ties with " + computerSelection;
    }
    
    else if (playerSelection == a) {
        if (computerSelection == b) {
            return "You lose! Paper beats rock."
        }
        else if (computerSelection == c) {
            return "You win! Rock beats scissors."
        }
    }

    else if (playerSelection == b) {
        if (computerSelection == a) {
            return "You win! Paper beats rock."
        }
        else if (computerSelection == c) {
            return "You lose! Scissors beats paper."
        }
    } 

    else if (playerSelection == c) {
        if (computerSelection == a) {
            return "You lose! Rock beats scissors."
        }
        else if (computerSelection == b) {
            return "You win! Scissors beats paper."
        }
    }
}

console.log(playRound(playerSelection,computerSelection))
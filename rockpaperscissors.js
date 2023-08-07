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

let win = 0;
let loss = 0;
let tie = 0;

let computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        tie++;
        return playerSelection + " ties with " + computerSelection;
    }
    
    else if (playerSelection == a) {
        if (computerSelection == b) {
            loss++;
            return "You lose! Paper beats rock."
        }
        else if (computerSelection == c) {
            win++;
            return "You win! Rock beats scissors."
        }
    }

    else if (playerSelection == b) {
        if (computerSelection == a) {
            win++;
            return "You win! Paper beats rock."
        }
        else if (computerSelection == c) {
            loss++;
            return "You lose! Scissors beats paper."
        }
    } 

    else if (playerSelection == c) {
        if (computerSelection == a) {
            loss++;
            return "You lose! Rock beats scissors."
        }
        else if (computerSelection == b) {
            win++;
            return "You win! Scissors beats paper."
        }
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        playRound(playerSelection, computerSelection);
        i++;
    }

    return "Wins: " + win + " Losses: " + loss + " Ties: " + tie
}

console.log(game())
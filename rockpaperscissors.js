let a = "rock";
let b = "paper";
let c = "scissors";



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

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have tied!"    
    }

    else if (playerSelection == a) {
        if (computerSelection == b) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }

        else if (computerSelection == c) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
    }

    else if (playerSelection == b) {
        if (computerSelection == a) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
        else if (computerSelection == c) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }
    }

    else if (playerSelection == c) {
        if (computerSelection == a) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }
        else if (computerSelection == b) {
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
    }

    else return "Error!!!";
}

let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));
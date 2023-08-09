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
        ties++;
        return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have tied!"    
    }

    else if (playerSelection == a) {
        if (computerSelection == b) {
            loss++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }

        else if (computerSelection == c) {
            wins++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
    }

    else if (playerSelection == b) {
        if (computerSelection == a) {
            wins++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
        else if (computerSelection == c) {
            loss++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }
    }

    else if (playerSelection == c) {
        if (computerSelection == a) {
            loss++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have lost!"
        }
        else if (computerSelection == b) {
            wins++;
            return "You selected: " + playerSelection + "\nOppenent selected: " + computerSelection + "\nYou have won!"
        }
    }

    else return "Error!!!";
}

let n = 0;
let wins = 0;
let loss = 0;
let ties = 0;

while (n < 5) {
    let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    n++;
}

function results() {
    if (wins > loss) {
        return "You won " + wins + " time(s), lost " + loss + " time(s), and tied " + ties + " time(s). You win!!!"
    }
    else if (loss > wins) {
        return "You won " + wins + " time(s), lost " + loss + " time(s), and tied " + ties + " time(s). You lose!!!"
    }
    else {
        return wins + " " + ties + " " + loss
    }
}

console.log(results());
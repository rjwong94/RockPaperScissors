let a = "rock";
let b = "paper";
let c = "scissors";

function getComputerChoice() {
    i = Math.floor(Math.random() * 3) + 1;
    if (i == 1) {
        return a;
    }

    if (i == 2) {
        return b;
    }

    else {
        return c;
    }
}

console.log(getComputerChoice())
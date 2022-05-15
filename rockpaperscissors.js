function computerPlay() {
    let res;
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            res = "Rock";
            break;
        case 1:
            res = "Paper";
            break;
        case 2:
            res = "Scissors";
            break;
    }
    return res;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection = capitalize(prompt("What do you chose ? (Rock, Paper or Scissors ?)\n")), computerSelection=computerPlay()) {
    let win;
    if (playerSelection === computerSelection) {
        return `${playerSelection} vs ${computerSelection}, it's even !\n`;
    }
    if (playerSelection === "Rock") {
        win = (computerSelection === "Scissors") || false;
    } else if (playerSelection === "Paper") {
        win = (computerSelection === "Rock") || false;
    } else if (playerSelection === "Scissors") {
        win = (computerSelection === "Paper") || false;
    } else {
        return "Please enter one of the following : Rock, Paper or Scissors·\n";
    }

    if (win) {
        return `You Won! ${playerSelection} beats ${computerSelection}\n`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}\n`
    }
}

console.log(rpsOneRound());
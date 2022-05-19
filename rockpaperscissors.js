function computerPlay() {
    let res;
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            res = "rock";
            break;
        case 1:
            res = "paper";
            break;
        case 2:
            res = "scissors";
            break;
    }
    return res;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "even";
    }
    if (playerSelection === "rock") {
        return (computerSelection === "scissors") || false;
    } else if (playerSelection === "paper") {
        return (computerSelection === "rock") || false;
    } else if (playerSelection === "scissors") {
        return (computerSelection === "paper") || false;
    } else {
        return "error";
    }
}

// Duplicate to create log later
// function isWinner(result) {
//     if (typeof(result) === "string") {
//         if (result === "even") {
//             console.log(`${playerSelection} vs ${computerSelection}, it's even !\n`);
//             console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`);
//         } else if (result === "error") {
//             console.log(`Round ${i + 1} - ERROR! Please enter one of the following : Rock, Paper or Scissors·\n`);
//         }
//     }
//     else if (typeof(result) === "boolean") {
//         if (result) {
//             playerScore++;
//             console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`);
//             console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`);
//         } else {
//             computerScore++;
//             console.log(`You Lose! ${computerSelection} beats ${playerSelection}\n`);
//             console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`);
//         }
//     }
// }


function isWinner(result, playerSelection, computerSelection) {
    // a changer pour que l'output soit à l'ecran
    if (typeof(result) === "string") {
        if (result === "even") {
            console.log(`${playerSelection} vs ${computerSelection}, it's even !\n`);
        } else if (result === "error") {
            console.log(`ERROR! Please enter one of the following : Rock, Paper or Scissors·\n`);
        }
    }
    else if (typeof(result) === "boolean") {
        if (result) {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`);
            playerScore++;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}\n`);
            computerScore++;
        }
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i<5; i++) {
//         playerSelection = prompt("What do you chose ? (Rock, Paper or Scissors ?)\n").toLowerCase();
//         computerSelection = computerPlay();
//         win = playRound(playerSelection, computerSelection);
//         isWinner ici mais osef
//     }
//     if (playerScore > computerScore) {
//         console.log(`Congratulations! You won against the computer : ${playerScore} - ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`What a shame! You lost against the computer : ${computerScore} - ${playerScore}`);
//     } else if (computerScore === playerScore) {
//         console.log(`Close one! It's even : ${playerScore} - ${computerScore}`)
//     }
// }

function displayResult() {
    const div = document.createElement('div');                     
    div.classList.add('result');
    div.textContent(`Player: ${playerScore} - IA: ${computerScore}`);
};


function logTest(e) {
    // console.log(this.classList.value);
    let playerSelection = this.classList.value;
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    isWinner(result, playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
};

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', logTest));
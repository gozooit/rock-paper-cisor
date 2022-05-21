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

function addBorder(className) {
    const div = document.querySelector(`.${className}`);
    if (div.classList.value !== `${className} border`) {
        div.classList.add('border');
    };
}

function setDisabled(className) {
    const buttons = document.querySelectorAll(`.${className}`);
    buttons.forEach(button => {
        if (button.getAttribute('disabled') !== true) {
            button.setAttribute('disabled', true);
        };
    })
    
}

function addText(className, text, border=false) {
    const div = document.getElementById(className);
    div.textContent = text;
    if (border) {
        addBorder(className);
    }
};

function isWinner(result, playerSelection, computerSelection) {
    // a changer pour que l'output soit à l'ecran
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    if (typeof(result) === "string") {
        if (result === "even") {
            addText('result', `${playerSelection} vs ${computerSelection}, it's even !\n`);
        } else if (result === "error") {
            addText('result', `ERROR! Please enter one of the following : Rock, Paper or Scissors·\n`);
        }
    }
    else if (typeof(result) === "boolean") {
        if (result) {
            addText('result', `You Won! ${playerSelection} beats ${computerSelection}\n`);
            playerScore++;
        } else {
            addText('result', `You Lose! ${computerSelection} beats ${playerSelection}\n`);
            computerScore++;
        }
    }
}

function createNewGame() {
    const body = document.querySelector('body');
    const newGame = document.createElement('button');
    newGame.setAttribute('id', 'newgame');
    newGame.classList.add('border');
    newGame.textContent = 'New game';
    body.appendChild(newGame);
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

function logTest(e) {
    // console.log(this.classList.value);
    let playerSelection = this.getAttribute('id');
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    isWinner(result, playerSelection, computerSelection);
    // console.log(playerScore);
    // console.log(computerScore);
    addText('score', `Player: ${playerScore} - IA: ${computerScore}`, border=true);
    if ((playerScore === 5) || (computerScore === 5)) {
        setDisabled('choice');
        if (playerScore === 5) {
            addText('score', 'You won. Do you want to play a new game ?', border=true);
            createNewGame();
        } else if (computerScore === 5) {
            addText('score', 'You lost. Do you want to play a new game ?', border=true);
            createNewGame();
        }
    };
};

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', logTest));
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

function addBorder(className) {
    const div = document.querySelector(`.${className}`);
    if (div.classList.value !== `${className} border`) {
        div.classList.add('border');
    };
}

function removeBorder(className) {
    const div = document.querySelector(`.${className}`);
    if (div.classList.value === `${className} border`) {
        div.classList.remove('border');
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

function removeDisabled(className) {
    const buttons = document.querySelectorAll(`.${className}`);
    buttons.forEach(button => {
        if (button.getAttribute('disabled') !== false) {
            button.removeAttribute('disabled');
        };
    }) 
}

function addText(className, text, border=false) {
    const div = document.getElementById(className);
    div.textContent = text;
    if (border) {
        addBorder(className);
    } else {
        removeBorder(className);
    };
};

function resetWindow() {
    addText('result', '');
    addText('score', '');
    const newGame = document.getElementById('newgame');
    newGame.parentNode.removeChild(newGame);
    removeDisabled('choice');
}

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

function addNewGameButton() {
    const body = document.querySelector('body');
    const newGame = document.createElement('button');
    newGame.setAttribute('id', 'newgame');
    newGame.textContent = 'New game';
    body.appendChild(newGame);
}


function play(e) {
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
            addNewGameButton();
        } else if (computerScore === 5) {
            addText('score', 'You lost. Do you want to play a new game ?', border=true);
            addNewGameButton();
        }
        const newGame = document.querySelector('#newgame');
        newGame.addEventListener('click', resetWindow);
        playerScore = 0;
        computerScore = 0;
    };
};

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', play));
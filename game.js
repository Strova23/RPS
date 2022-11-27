var computerScore = 0;
var playerScore = 0;
const results = document.querySelector('.results');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

//computers choice
function getComputerChoice() {
    options = ["rock", "paper", "scissors"]
    computerSelection = options[Math.floor(Math.random() * 3)];
    return computerSelection;
}

//player choice
function getPlayerChoice(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

//decide who wins
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        results.textContent = "You Won!";
    } else if (playerSelection == "rock" && computerSelection == "paper"
    || playerSelection == "scissors" && computerSelection == "rock"
    || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        results.textContent = "You Lost!";
    } else {
        results.textContent = "Its a Draw!";
    }
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        results.textContent = "Congratulations you beat the Computer";
    } else if (computerScore == 5) {
        results.textContent = "You have lost to the Computer"
    }
}

const keys = document.querySelectorAll('.rps');
keys.forEach((key) => {
    key.addEventListener('click', getPlayerChoice)
})


// function newGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound()
//         console.log(`Player Score: ${playerScore}`)
//         console.log(`Computer Score: ${computerScore}`)
//     }
//     if (playerScore > computerScore) {
//         console.log("You Won the Game!");
//         return "You Win!";
//     } else if (playerScore < computerScore) {
//         console.log("You Lost the Game!");
//         return "You Lost!";
//     } else {
//         console.log("Game is a Draw!");
//         return "Its a Draw!";
//     }
// }
// newGame()



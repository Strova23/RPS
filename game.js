var computerScore = 0;
var playerScore = 0;
//computers choice
function getComputerChoice() {
    options = ["rock", "paper", "scissors"]
    computer = options[Math.floor(Math.random() * 3)];
    return computer;
}
//decide who wins
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "paper"
    || playerSelection == "scissors" && computerSelection == "rock"
    || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
    } else {
        return 0;
    }
}

function newGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log("You Won the Game!");
        return "You Win!";
    } else if (playerScore < computerScore) {
        console.log("You Lost the Game!");
        return "You Lost!";
    } else {
        console.log("Game is a Draw!");
        return "Its a Draw!";
    }
}

newGame()



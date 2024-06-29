// generates the computer's choice (that is, rock, paper, or scissors)
function getComputerChoice() {
    let numberAction = Math.floor(Math.random() * 3); // generates a number between 0 and 2, inclusive.
    if(numberAction === 0) {
        return "rock";
    } else if(numberAction === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerChoice, userChoice) {

    getWinnerStatus();

    // conditional statements if user wins
    if(computerChoice === 'rock' && userChoice === 'paper'){
        board.textContent = "You win! Paper beats Rock.";
        userScore++;
        userScoreboard.textContent = `User Score: ${userScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'scissors'){
        board.textContent = "You win! Scissors beats Paper.";
        userScore++;
        userScoreboard.textContent = `User Score: ${userScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'rock'){
        board.textContent = "You win! Rock beats Scissors.";
        userScore++;
        userScoreboard.textContent = `User Score: ${userScore}`;
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        board.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        computerScoreboard.textContent = `Computer Score: ${computerScore}`;
    } else if(userChoice === 'paper' && computerChoice === 'scissors'){
        board.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
        computerScoreboard.textContent = `Computer Score: ${computerScore}`;
    } else if(userChoice === 'scissors' && computerChoice === 'rock'){
        board.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        computerScoreboard.textContent = `Computer Score: ${computerScore}`;
    } else {
        board.textContent = "It's a tie!";
    }

    getWinnerStatus();
    return;
}

// determines winner by evaluating global score variables.
function getWinnerStatus() {   
    if(computerScore === 5){
        board.textContent = "Sorry. The computer beat you...";
        rockUserChoice.removeEventListener();
        paperUserChoice.removeEventListener();
        scissorsUserChoice.removeEventListener();
    } else if (userScore === 5){
        board.textContent = "Congrats! You beat the computer.";
        rockUserChoice.removeEventListener();
        paperUserChoice.removeEventListener();
        scissorsUserChoice.removeEventListener();
    } else {
        return;
    }
}

// main code
let computerScore = 0, userScore = 0;

const rockUserChoice = document.querySelector("#rock");
const paperUserChoice = document.querySelector("#paper");
const scissorsUserChoice = document.querySelector("#scissors");

const board = document.querySelector("#board");
const userScoreboard = document.querySelector("#user-score");
const computerScoreboard = document.querySelector("#computer-score");

rockUserChoice.addEventListener("click", () => {
  playRound(getComputerChoice(),"rock");
});
paperUserChoice.addEventListener("click", () => {
  playRound(getComputerChoice(),"paper");
});
scissorsUserChoice.addEventListener("click", () => {
  playRound(getComputerChoice(),"scissors");
});

// generates the computer's choice (that is, rock, paper, or scissors)
function getComputerChoice() {
    let numberAction = Math.floor(Math.random() * 3); // generates a number between 1 and 3, inclusive.
    if(numberAction === 0) {
        return "rock";
    } else if(numberAction === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// gets the user's choice
function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase(); // sanitizes code to account for capitalization differences.
    while(!(
        userChoice === 'rock' || 
        userChoice === 'paper' || 
        userChoice === 'scissors' 
    )) {
        userChoice = prompt("Rock, Paper, or Scissors?");
        userChoice = userChoice.toLowerCase();
    }
    return userChoice;
}

// evaluates which party wins. outputs a win/lose/tie message to the console and increments the winning party's score.
function playRound(computerChoice, userChoice) {
    // gets computer and user choices.
    computerChoice = getComputerChoice();
    userChoice = getUserChoice();

    // conditional statements if user wins
    if(computerChoice === 'rock' && userChoice === 'paper'){
        console.log("You win! Paper beats Rock.");
        userScore++;
        return;
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        console.log("You win! Scissors beats Paper.");
        userScore++;
        return;
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        console.log("You win! Rock beats Scissors.");
        userScore++;
        return;
    }

    // conditional statements if computer wins
    if(userChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        return;
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
        return;
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        return;
    }

    // code in case of tie
    console.log("It's a tie!");
    return;
}

// determines winner by evaluating global score variables.
function winner() {
    if(computerScore > userScore){
        console.log("Sorry. The computer beat you...");
    }
    if(computerScore < userScore){
        console.log("Congrats! You beat the computer.");
    }
    if(computerScore === userScore){
        console.log("Wow! It's a tie. Try again!")
    }
}

// plays five rounds. declares a winner at the end of the game.
function playGame() {
    let computerChoice, userChoice;
    for(i = 0; i < 5; i++){
        playRound(computerChoice, userChoice);
    }
    winner();
}

// main code
let computerScore = 0, userScore = 0;
playGame();
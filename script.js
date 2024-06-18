// create a rock paper scissors game

// inputs:
// 1. rps user choice

// variables:
// 1. user choice
// 2. computer "choice"
// 3. user score and computer score
// 4. etc.

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

// main code
let computerChoice = getComputerChoice();
console.log(computerChoice);
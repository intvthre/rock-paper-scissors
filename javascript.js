// Write a function that randomly returns "rock", "paper", or "scissors"

// "Function" {
// (Input = randomly "return" a string from an array)
// "Array" = [three strings]
// "Math.random" = return a random string from array
//  Run array through Math.random with "return"; "return" sends input to () at 
// start of 
//}

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * choices.length);
    return choices[result]
}

// Write the logic to get the human choice

// "Function" {
// (Input = "return" one of the valid choice from input)
// Add "prompt" method to get user's input
// }

function getHumanChoice () {
    let choices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose Rock, Paper, or Scissors")
    
    if (choice.toLowerCase() ===  "rock" )  {
        alert("You choose Rock");
    }

    else if (choice.toLowerCase() ===  "paper" )  {
        alert("You choose Paper");
    }

    else if (choice.toLowerCase() ===  "scissors" )  {
        alert("You choose Scissors");
    }

}

// Declare the player score variables

// Create variables 'humanScore' and 'computerScore'
// Initialize variables with value of 0

let humanScore = 0;
let computerScore = 0;


// Write the logic to play a single round

// "Function" {
// (Input = two parameters "humanChoice" and "computerChoice" taking
// "getHumanChoice" and "getComputerChoice" as arguments, and keeping score;
//  pass values(arguments) to function by passing value from previous functions)
// 'humanChoice' parameter 'toLowerCase'
// Code 'console.log for 'playRound' to declare round winner
// 'humanScore' and 'computerScore' incrementing based on round winner
//}

function playRound (humanChoice, computerChoice) {

    
    if (humanChoice === "rock" && computerChoice === "rock") {
        return ("It's a draw!");
    }   
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        return ("You lose!");
    }   

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        return ("You win!");
    }   

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        return ("You win!");
    }   

    else if (humanChoice === "paper" && computerChoice === "paper") {
        return ("It's a draw!");
    }   

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        return ("You lose!");
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        return ("You lose!");
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        return ("You win!");
    }   

    else if (humanChoice === "scissors"  && computerChoice === "scissors" ) {
        return ("It's a draw!");
    }   

    

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// Write the logic to play the entire game

// 'Function' {
// Move playRound and score variables to function
// Call 'playRound' to play five rounds

// }
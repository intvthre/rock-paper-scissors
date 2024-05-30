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
    let choice = prompt("Choose Rock, Paper, or Scissors.");
    
    if (choice.toLowerCase() ===  "rock")  {
    }

    else if (choice.toLowerCase() ===  "paper" )  {
    }

    else if (choice.toLowerCase() ===  "scissors" )  {
    }

}


// Declare the player score variables

// Create variables 'humanScore' and 'computerScore'
// Initialize variables with value of 0




// Write the logic to play a single round

// "Function" {
// (Input = two parameters "humanChoice" and "computerChoice" taking
// "getHumanChoice" and "getComputerChoice" as arguments, and keeping score;
//  pass values(arguments) to function by passing value from previous functions)
// 'humanChoice' parameter 'toLowerCase'
// Code 'console.log for 'playRound' to declare round winner
// 'humanScore' and 'computerScore' incrementing based on round winner
//}



// Write the logic to play the entire game

// 'Function' {
// Move playRound and score variables to function
// Call 'playRound' to play five rounds
// 'CALL' is a keyword


function playGame (x) {
// passing loop value does little because playRound doesn't read it
// you need a function here for running the game

x(playRound(playRound));




    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    

    function playRound (humanChoice, computerChoice) {
// try to play a single round with prompt, and then iterate that with loop
    
        if (humanChoice === "rock" && computerChoice === "rock") {
            alert ("It's a draw!  $humanScore $computerScore");
        }   
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            alert ("You lose! $humanScore $computerScore");
        }   
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            alert ("You win! $humanScore $computerScore");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            alert ("You win! $humanScore $computerScore");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "paper") {
            alert ("It's a draw! $humanScore $computerScore");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            alert ("You lose! $humanScore $computerScore");
        }
    
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            alert ("You lose! $humanScore $computerScore");
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            alert ("You win! $humanScore $computerScore");
        }   
    
        else if (humanChoice === "scissors"  && computerChoice === "scissors" ) {
            alert ("It's a draw! $humanScore $computerScore");
        }   
    
    }

    let humanScore = 0;
    let computerScore = 0;

}
// 1.
// function to iterate game five times
// what kind of variables/function to use?
// Create functions, and then const variables to then use as parameters for 'playGame'



let counter = 1;
function loop()
{
    alert (getHumanChoice());
    if (counter < 5){
        counter++
        window.setTimeout(loop, 400);
    }
}

// use 'loop' as parameter for 'playGame' to run the function five times
// change prompt so 'getPlayerChoice' prompt runs five times

// 

playGame(loop);



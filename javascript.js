// Write a function that randomly returns "rock", "paper", or "scissors"

// "Function" {
// (Input = randomly "return" a string from an array)
// "Array" = [three strings]
// "Math.random" = return a random string from array
//  Run array through Math.random with "return"; "return" sends input to () at 
// start of 
//}



// Write the logic to get the human choice

// "Function" {
// (Input = "return" one of the valid choice from input)
// Add "prompt" method to get user's input
// }




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



function playGame (c) {

 
let counter = 1;
function loop()
{   
    
    alert('Round ' +counter);
    if (counter < 5){
        counter++
        window.setTimeout(loop, 400);

    }
} 



const z = loop();
const x = playRound();

c(z, x);
    //3
function playRound (humanChoice, computerChoice) {
// it's this line, and 'humanChoice', 'computerChoice' that aren't working,




   //1 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    //2
    playRound(humanSelection, computerSelection) 

    //4 
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log ("It's a draw! ${humanScore} ${computerScore} ");
        }   
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            console.log ("You lose! ");
        }   
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            console.log ("You win! ");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            console.log ("You win! ");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log ("It's a draw! ");
        }   
    
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            console.log ("You lose! ");
        }
    
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            console.log ("You lose! ");
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            console.log ("You win! ");
        }   
    
        else if (humanChoice === "scissors"  && computerChoice === "scissors" ) {
            console.log ("It's a draw! ");

        }

    
        function getComputerChoice () {
            let choices = ["rock", "paper", "scissors"];
            let result = Math.floor(Math.random() * choices.length);
            return choices[result]
        }
        
        function getHumanChoice () {
            let choice = prompt("Choose Rock, Paper, or Scissors");
                if (choice.toLowerCase() ===  "rock")  {
                    return "rock";
            }
        
                else if (choice.toLowerCase() ===  "paper" )  {
                return "paper"
            }
        
                else if (choice.toLowerCase() ===  "scissors" )  {
                return "scissors"
            }
        
        }

        let humanScore = 0;
        let computerScore = 0;
        
        console.log(humanScore);
        console.log(computerScore);

}

    

}

// function to iterate game five times
// what kind of variables/function to use?
// Create functions, and then const variables to then use as parameters for 'playGame'







playGame();

// 1. 'loop' runs only once, rather than five times
// 2.'getHumanChoice' does not pass selection to if else, and doesn't compare results,
// 3. or count score
// console.log showed results from playRound, compared, and counted score, but it's not
// working

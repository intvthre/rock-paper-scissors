let humanScore = 0;
let computerScore = 0;

function playGame (c) {

let counter = 1;
function loop()
{   
    
    
    if (counter < 6){
        alert('Round ' +counter);
        console.log('Round ' +counter)
        counter++
        window.setTimeout(loop, 400);
    }
} 

const z = loop();
const x = playRound();

c(x, z);

function playRound (humanChoice, computerChoice) {


        if (humanChoice === "rock" && computerChoice === "rock") {
            alert ("It's a draw! ");
            return;
        }   
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            alert ("You lose! ");
            return;
        }   
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            alert ("You win! ");
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            alert ("You win! ");
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "paper") {
            alert ("It's a draw! ");
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            alert ("You lose! ");
            return;
        }
    
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            alert ("You lose! ");
            return;
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            alert ("You win! ");
            return;
        }   
    
        else if (humanChoice === "scissors"  && computerChoice === "scissors" ) {
            alert ("It's a draw! ");
            return;
        }
        

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection) 

    return
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

}

}



playGame();


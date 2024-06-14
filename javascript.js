let humanScore = 0;
let computerScore = 0;

function playGame () {

x = playRound();


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

    playRound(humanSelection, computerSelection);

    
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


let i = 0;

/* for (i=0; i<=5; i += 1) {    
playGame();
} */

const button = document.querySelector("button");
button.addEventListener('click', () => {
    playRound();
});

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")

const computerSelection = getComputerChoice();
 
    rock.addEventListener('click', () => {
        playRound("rock", computerSelection);
    });
 
    paper.addEventListener('click', () => {
        playRound("paper", computerSelection);
    })
 
    scissors.addEventListener('click', () => {
        playRound("scissors", computerSelection);
    })
 
     
    function getComputerChoice () {
        let choices = ["rock", "paper", "scissors"];
        let result = Math.floor(Math.random() * choices.length);
        return choices[result]
         }
         

/* function playGame () {

x = playRound(); */


function playRound (humanChoice, computerChoice) {


        if (humanChoice === "rock" && computerChoice === "rock") {
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
    
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "paper") {
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
    
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }
    
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }
    
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }   
    
        else if (humanChoice === "scissors"  && computerChoice === "scissors" ) {
            div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;
            return;
        }
    
}

//}


/* let i = 0; */

/* for (i=0; i<=5; i += 1) {    
playGame();
} */

// Announce winner when humanScore or computerScore reaches 5
// Change alert to DOM method updating score in div
// Fix computerChoice not changing value every round

let humanScore = 0;
let computerScore = 0;


const div = document.querySelector("div");
div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;


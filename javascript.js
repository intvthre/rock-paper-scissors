
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")
 
    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        if (humanScore === 5) {
            p.textContent = "You win!";
            
        }
        
        else if (computerScore === 5) {
            p.textContent = "You lose!";
        }
    });
 
    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
        if (humanScore === 5) {
            p.textContent = "You win!";
        }
        
        else if (computerScore === 5) {
            p.textContent = "You lose!";
        }
    })
 
    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
        if (humanScore === 5) {
            p.textContent = "You win!";
        }
        
        else if (computerScore === 5) {
            p.textContent = "You lose!";
        }
    })
 
     
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * choices.length);
    return choices[result]
    }
         
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

let humanScore = 0;
let computerScore = 0;


const div = document.querySelector("div");
div.textContent = `Player Score = ${humanScore} Computer Score = ${computerScore}`;

const p = document.querySelector("p");
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




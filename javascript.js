// Write a function that randomly returns "rock", "paper", or "scissors"

// "Function" {
// (Input = randomly "return" a string from an array)
// "Array" = [three strings]
// "Math.random" = return a random string from array
//  Run array through Math.random with "return"; "return" sends input to () at 
// start of function

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * choices.length);
    return choices[result]
}

console.log (getComputerChoice())
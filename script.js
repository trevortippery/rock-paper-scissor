//  Rock Paper Scissors Game!
// Trevor Tippery 

function getComputerChoice() 
{
    let randomChoice = Math.floor(Math.random() * 3);
    
    if(randomChoice == 0)
        return "rock";
    else if(randomChoice == 1)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
        return `Its a tie! You and the computer both picked ${playerSelection}`

    if(playerSelection == "rock" && computerSelection == "scissors")
        return "You win! Rock beats Scissors";
    if(playerSelection == "paper" && computerSelection == "rock")
        return "You win! Paper beats Rock";
    if(playerSelection == "scissors" && computerSelection == "paper")
        return "You win! Scissors beats Paper";
    else
        return `You lose. The computer chose ${computerSelection} and ${computerSelection} beats ${playerSelection}.`;
}

function properCapitalization(string) 
{
    return string.toLowerCase();
}

let playerSelection;
let computerSelection;

playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
playerSelection = properCapitalization(playerSelection);
computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));



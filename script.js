let playerSelection = "PAPER";
let computerSelection = getComputerChoice();

correctPlayerSelection = properCapitalization(playerSelection);

console.log(playRound(correctPlayerSelection, computerSelection));






function getComputerChoice() 
{
    if(Math.floor(Math.random() * 3) == 0)
        return "Rock";
    else if(Math.floor(Math.random() * 3) == 1)
        return "Paper";
    else if(Math.floor(Math.random() * 3) == 2)
        return "Scissors";
}

function playRound (playerSelection, computerSelection) 
{
    if(playerSelection == computerSelection)
        return `It's a tie! You and the computer picked ${playerSelection}`;
    if(playerSelection == "Rock" && computerSelection == "Scissors") 
        return "You win! Rock beats Scissors";
    if(playerSelection == "Paper" && computerSelection == "Rock") 
        return "You win! Paper beats Rock";
    if(playerSelection == "Scissors" && computerSelection == "Paper") 
        return "You win! Scissors beats Paper";
    else
        return `You lose! ${computerSelection} beats ${playerSelection}`;
}


function properCapitalization (str) 
{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


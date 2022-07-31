//  Rock Paper Scissors Game!
// Trevor Tippery 

/* Functions */

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
    {
        return "You win! Rock beats Scissors";
    }
    if(playerSelection == "paper" && computerSelection == "rock")
    {
        return "You win! Paper beats Rock";
    }
    if(playerSelection == "scissors" && computerSelection == "paper")
    {
        return "You win! Scissors beats Paper";
    }
    else
    {
        return `You lose. The computer chose ${computerSelection} and ${computerSelection} beats ${playerSelection}.`;
    }
}

function properCapitalization() 
{
    let selection = prompt("Choose: Rock, Paper, or Scissors?");
    if(selection.toLowerCase() == "rock")
        return selection.toLowerCase();
    if(selection.toLowerCase() == "paper")
        return selection.toLowerCase();
    if(selection.toLowerCase() == "scissors")
        return selection.toLowerCase();
    
    alert("Not a valid choice!");
    return "error";
}

function game()
{
    let roundCounter = 1;
    let playerScore = 0;
    let computerScore = 0;


    for(let i = 0; i < 5; i++)
    {
        let playerSelection;
        let computerSelection;

        playerSelection = properCapitalization();

        while(playerSelection == "error")
            playerSelection = properCapitalization();

        computerSelection = getComputerChoice();

        console.log("Round " + i + ": " + playRound(playerSelection, computerSelection));

        console.log(`Score: ${playerScore} - ${computerScore}`);
        roundCounter++;
    }


}

/* Main body */

console.log("5 rounds of Rock Paper Scissors! Win 3 rounds to win the game.");

game();



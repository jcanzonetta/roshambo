const results = document.querySelector('#resultsContainer');

const rockButton = document.querySelector('#rockContainer');
rockButton.addEventListener('click', e => {
    results.textContent = round('rock',computerPlay());
})

const paperButton = document.querySelector('#paperContainer');
paperButton.addEventListener('click', e => {
    results.textContent = round('paper',computerPlay());
})

const scissorsButton = document.querySelector('#scissorsContainer');
scissorsButton.addEventListener('click', e => {
    results.textContent = round('scissors',computerPlay());
})

const computerResults = document.querySelector('#computerReultsContainer');

function computerOutput(play){
    switch (play){
        case 'Rock': 
            computerResults.textContent = "Computer played Rock";
            break;
        case 'Paper':
            computerResults.textContent = "Computer played Paper";
        default:
            computerResults.textContent = "Computer played Scissors";
    }
    
}

function computerPlay(){
    switch (Math.floor(Math.random()*3)){
        case 0:
            computerOutput("Rock");
            return "Rock";
            break;
        case 1:
            computerOutput("Paper");
            return "Paper";
            break;
        default:
            computerOutput("Scissors");
            return "Scissors";
    }
}

function round(playerSelection, computerSelection){
    let playerStandard = playerSelection.toLowerCase();
    let computerStandard = computerSelection.toLowerCase();

    if (playerStandard == computerStandard){
        return "Tie! Go again!"
    } else if (playerStandard == "rock" && computerStandard == "paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerStandard == "rock" && computerStandard == "scissors"){
        return "You Win! Rock beats Paper";
    } else if (playerStandard == "scissors" && computerStandard == "paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerStandard == "scissors" && computerStandard == "rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerStandard == "paper" && computerStandard == "rock"){
        return "You Win! Paper beats Rock";
    } else if (playerStandard == "paper" && computerStandard == "scissors"){
        return "You Win! Scissors beats Paper";
    } else{
        return "Stop fooling around.";
    }
}


/* Function to play 5 games. */
function game(){
    let i;
    let playerPlay;
    let result;
    let playerWin = 0;

    for (i=0; i<5; i++){
        playerPlay = prompt("Rock, Paper, Scissors... Shoot!");
        
        result = round(playerPlay, computerPlay());
        
        playerWin += (result.charAt(4) == "W" ? 1 : 0);

        console.log(result);
    }
    console.log(`You won ${playerWin} times.`)
}

function winner(str){
    return (str.charAt(4) == "W" ? 1 : 0);
}
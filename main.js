let plays = 0;
let playerWins = 0;

const results = document.querySelector('#gameResultsContainer');

const computerResults = document.querySelector('#computerReultsContainer');

const rockButton = document.querySelector('#rockContainer');
rockButton.addEventListener('click', e => {
    results.textContent = round('rock',computerPlay());
    
    plays = scoreUpdate(results,plays);
    console.log(playerWins);
})

const paperButton = document.querySelector('#paperContainer');
paperButton.addEventListener('click', e => {
    results.textContent = round('paper',computerPlay());
    
    plays = scoreUpdate(results,plays);
})

const scissorsButton = document.querySelector('#scissorsContainer');
scissorsButton.addEventListener('click', e => {
    results.textContent = round('scissors',computerPlay());
    
    plays = scoreUpdate(results,plays);
})

const resultsScore = document.querySelector('#resultsScoreNumber');
const playsNumber = document.querySelector('#playsNumber');


function scoreUpdate(results,plays){
    
    if(results.textContent.charAt(4) == "W"){
        playerWins++;
        resultsScore.textContent = playerWins;
        plays++
    } else if (results.textContent.charAt(4) == "L"){
        plays++;
    }
    playsNumber.textContent = plays;

    if(plays<5){
        return plays;
    }else if (playerWins >2){
        alert("You win!");
        playerWins = 0;
        resultsScore.textContent = 0;
        playsNumber.textContent = 0;
        return 0;
    } else{
        alert("You lose!")
        playerWins = 0;
        resultsScore.textContent = 0;
        playsNumber.textContent = 0;
        return 0;
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
        return "You Lose! Scissors beats Paper";
    } else{
        return "Stop fooling around.";
    }
}
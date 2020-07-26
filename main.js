function computerPlay(){
    switch (Math.floor(Math.random()*3)){
        case 0:
        console.log("Computer played Rock");
        return "Rock";
        break;
        case 1:
        console.log("Computer played Paper");
        return "Paper";
        break;
        default:
        console.log("Computer played Scissors");
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
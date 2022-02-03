function computerPlay (){
    const tokens = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * tokens.length);
    /* console.log(random, tokens[random]) */
    const computerSelection = tokens[random];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "DRAW";
    }
    else if (playerSelection === 'ROCK'){
        switch (computerSelection) {
            case 'PAPER':
                return "You lost";
            case 'SCISSORS':
                return "You win";
        }
    }
    else if (playerSelection === 'PAPER'){
        switch (computerSelection) {
            case 'SCISSORS':
                return "You lost";
            case 'ROCK':
                return "You win";
        }
    }
    else if (playerSelection === 'SCISSORS'){
        switch (computerSelection) {
            case 'ROCK':
                return "You lost";
            case 'PAPER':
                return "You win";
        }
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let playerScore;
    let computerScore;

    let gamesSelect = prompt("How many rounds do you want to play?");
    let playCount = parseInt(gamesSelect);
    console.log(playCount);

    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i<playCount; i++){
        let playerSelect = prompt("Choose between rock, paper and scissors!");
        playerSelection = playerSelect.toUpperCase();
        console.log(playerSelection);    
        computerSelection = computerPlay();    
        let result = playRound(playerSelection, computerSelection);
        console.log(result);  
        if(result === "You lost"){       
            computerScore++;
        }
        else if (result === "You win"){
            playerScore++;
        }
    }
    console.log(`The final score is: PLAYER ${playerScore} - COMPUTER - ${computerScore}`);

    if(playerScore > computerScore){
        console.log(`PLAYER WINS!`);
    }
    else if (computerScore > playerScore){
        console.log(`COMPUTER WINS!`);
    }
    else if (computerScore === playerScore){
        console.log(`IT'S A DRAW!`);
    }

}    


game();
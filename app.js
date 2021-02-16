function computerPlay(){
    let RPS = Math.floor((Math.random() * (3) ) + 1);

    if (RPS == 1) {RPS = 'Rock'};
    if (RPS == 2) {RPS = 'Paper'};
    if (RPS == 3) {RPS = 'Scissors'};

    return RPS;
}

function gameRound(playerSelection, computerSelection) {
    
    // add case sensitivity handling

    if (playerSelection == computerSelection) {
        return 'It\'s a tie.'
    }
    if (playerSelection == 'Rock'){
        if (computerSelection == 'Paper'){
            // lose
        }
        if (computerSelection == 'Scissors'){
            // win
        }
    }
    if (playerSelection == 'Paper'){
        if (computerSelection == 'Scissors'){
            // lose
        }
        if (computerSelection == 'Rock'){
          // win
        }
    }
    if (playerSelection == 'Scissors'){
        if (computerSelection == 'Rock'){
           // lose
        }
        if (computerSelection == 'Paper'){
           // win
        }
    
    }
    
}
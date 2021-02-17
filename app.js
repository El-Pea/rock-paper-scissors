function computerPlay(){
    let RPS = Math.floor((Math.random() * (3) ) + 1);

    if (RPS == 1) {RPS = 'Rock'};
    if (RPS == 2) {RPS = 'Paper'};
    if (RPS == 3) {RPS = 'Scissors'};

    return RPS;
}

function playRound(playerSelection, computerSelection){
    
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();

    let p1Win = `You win! ${playerSelection} beats ${computerSelection}.`;
    let p1Lose = `You lose! ${computerSelection} beats ${playerSelection}.`;

    if (p1 == p2){
        return 'It\'s a tie.';
    }
    if (p1 == 'rock'){
        if (p2 == 'paper'){
            return p1Lose;
        }
        if (p2 == 'scissors'){
            return p1Win;
        }
    }
    if (p1 == 'paper'){
        if (p2 == 'scissors'){
            return p1Lose;
        }
        if (p2 == 'rock'){
            return p1Win;
        }
    }
    if (p1 == 'scissors'){
        if (p2 == 'rock'){
            return p1Lose;
        }
        if (p2 == 'paper'){
            return p1Win;
        }
    
    }

   
}
//const playerSelection = "rock";
//const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), computerPlay()));
    }
}
game();
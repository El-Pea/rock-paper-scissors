let p1Score = 0;
let p2Score = 0;

function computerPlay(){
    let RPS = Math.floor((Math.random() * (3)) + 1);

    if (RPS === 1) {RPS = 'Rock'};
    if (RPS === 2) {RPS = 'Paper'};
    if (RPS === 3) {RPS = 'Scissors'};

    return RPS;
}

function gameOver(){
    p1Score = 0;
    p2Score = 0;
    endGame.textContent = '';
}

function playRound(playerSelection, computerSelection){
    
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();

    let p1Win = `You win! ${playerSelection} beats ${computerSelection}.`;
    let p1Lose = `You lose! ${computerSelection} beats ${playerSelection}.`;

    let you = document.getElementById('player-score');
    let computer = document.getElementById('computer-score');
    let endGame = document.getElementById('game-win-message');

    function score(decision){
        if (decision === p1Win){p1Score++}; 
        if (decision === p1Lose){p2Score++};
        if (p1Score === 5){
            endGame.textContent = 'You win the game!';
        }
        if (p2Score === 5){
            endGame.textContent = 'Computer wins the game!';
        }    

        you.textContent = p1Score;
        computer.textContent = p2Score;

        return decision;
    }
    
    function theDecider() {
        if (p1 === p2){
            return 'It\'s a tie.';
        }
        if (p1 === 'rock'){
            if (p2 === 'paper'){
                return p1Lose;
            }
            if (p2 === 'scissors'){
                return p1Win;
            }
        }
        if (p1 === 'paper'){
            if (p2 === 'scissors'){
                return p1Lose;
            }
            if (p2 === 'rock'){
                return p1Win;
            }
        }
        if (p1 === 'scissors'){
            if (p2 === 'rock'){
                return p1Lose;
            }
            if (p2 === 'paper'){
                return p1Win;
            }
        } 
    }
    return score(theDecider()); /*theDecider();*/
}

function clickGame() {
    
    const buttons = document.querySelectorAll('button');
    const winMessage = document.getElementById('round-win-message');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            return winMessage.textContent = playRound(button.id, computerPlay());
        });
    });
}

clickGame();
/*
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt(), computerPlay()));
    }

game();

}
*/
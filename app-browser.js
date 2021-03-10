let p1Score = 0;
let p2Score = 0;

function computerPlay(){
    let RPS = Math.floor((Math.random() * (3)) + 1);

    if (RPS === 1) {RPS = 'Rock'};
    if (RPS === 2) {RPS = 'Paper'};
    if (RPS === 3) {RPS = 'Scissors'};

    return RPS;
}

function restart(){
    p1Score = 0;
    p2Score = 0;
    endGame.textContent = '';
}

function playRound(p1, p2){

    let p1Win = `You win! ${p1} beats ${p2}.`;
    let p1Lose = `You lose! ${p2} beats ${p1}.`;

    let you = document.getElementById('player-score');
    let computer = document.getElementById('computer-score');
    let endGame = document.getElementById('game-win-message');

    function score(decision){
        if (decision === p1Win){
            p1Score++
            you.textContent = p1Score;
        }; 
        if (decision === p1Lose){
            p2Score++
            computer.textContent = p2Score;
        };
        if (p1Score === 5){
            endGame.textContent = 'You win the game!';
            return killGame();
        }
        if (p2Score === 5){
            endGame.textContent = 'Computer wins the game!';
            return killGame();
        }   

        return decision;
    }
    
    function theDecider() {
        if (p1 === p2){
            return 'It\'s a tie.';
        }
        if (p1 === 'Rock'){
            if (p2 === 'Paper'){
                return p1Lose;
            }
            if (p2 === 'Scissors'){
                return p1Win;
            }
        }
        if (p1 === 'Paper'){
            if (p2 === 'Scissors'){
                return p1Lose;
            }
            if (p2 === 'Rock'){
                return p1Win;
            }
        }
        if (p1 === 'Scissors'){
            if (p2 === 'Rock'){
                return p1Lose;
            }
            if (p2 === 'Paper'){
                return p1Win;
            }
        } 
    }
    return score(theDecider()); 
}

function clickGame(){
    const buttons = document.querySelectorAll('button');
    const winMessage = document.getElementById('round-win-message');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            return winMessage.textContent = playRound(button.id, computerPlay());
        });
    });
}

function killGame(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

clickGame();

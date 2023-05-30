
const choice = ['rock', 'paper', 'scissor'];

function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}

console.log(getComputerChoice());

function roundPlay(player_Choice, computer_choice){
    const selectionLower = player_Choice.toLowerCase();
    if (selectionLower === 'rock'){
        if (computer_choice === 'scissor'){
            return 'win!';
        } else if (computer_choice === 'paper'){
            return 'lose!';
        } else {
            return 'tie';
        }
    } else if (selectionLower === 'scissor'){
        if (computer_choice === 'rock'){
            return 'lose!';
        } else if (computer_choice === 'paper'){
            return 'win!';
        } else {
            return 'tie';
        }
    } else if (selectionLower === 'paper'){
        if (computer_choice === 'rock'){
            return 'win!';
        } else if (computer_choice === 'scissor'){
            return 'lose!';
        } else {
            return 'tie';
        }
    }  else {
    return "Invalid selection. Please choose rock, paper, or scissors.";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(roundPlay(playerSelection, computerSelection));

function game(){

}
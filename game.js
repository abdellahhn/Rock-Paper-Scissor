
const choice = ['rock', 'paper', 'scissor'];

function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}

console.log(getComputerChoice());

function roundPlay(player_Choice, computer_choice){
    player_Choice = player_Choice.toLowerCase();
    if (
        (player_Choice === 'rock' && computer_choice === 'scissor') ||
        (player_Choice === 'scissor' && computer_choice === 'paper') ||
        (player_Choice === 'paper' && computer_choice === 'rock')) {
        return 'win!';
    } else if(
        (player_Choice === 'scissor' && computer_choice === 'rock') ||
        (player_Choice === 'paper' && computer_choice === 'scissor') ||
        (player_Choice === 'rock' && computer_choice === 'paper')
    ) {
        return "Lose!";
    } else {
        return "Tie!";
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(roundPlay(playerSelection, computerSelection));

function game(){
    const prompt = require("prompt-sync")({sigint:true});
    let pt_computer = 0;
    let pt_player = 0;


    for (let round = 1; round <= 5; round++){
        console.log(`Round ${round}:`);
        let player_choice = prompt("Enter your choice: ");
        let computer_choice = getComputerChoice();

        console.log(`Player choice: ${player_choice}`);
        console.log(`Computer choice: ${computer_choice}`);

        let round_res = roundPlay(player_choice, computer_choice);
        if (round_res === 'win!'){
            console.log('Round Won!');
            pt_player ++;
        } else if (round_res === 'Lose!'){
            console.log('Round Lost!');
            pt_computer ++;
        } else {
            console.log("Tie!");
        }
    }

    console.log("Game Over!!");
    console.log(`Player Score: ${pt_player}`);
    console.log(`Computer Score: ${pt_computer}`);

    if (pt_player > pt_computer){
        console.log("You Win!");
    } else if (pt_player < pt_computer){
        console.log("You Lose!");
    } else {
        console.log("Tie!")
    }
}

game();
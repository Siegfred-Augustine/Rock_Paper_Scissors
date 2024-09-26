console.log("Rock Paper Scissors game");

function getComputerChoice(){
    let choice = Math.round((Math.random() * 2));
    return choice;
}

function getHumanChoice (){
    let choice = prompt("Enter 'Rock', 'Paper', or 'Scissors'").toLowerCase();

    switch(choice){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
    return -1;
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice){
    if(humanChoice === computerChoice){
        console.log("It's a tie this round");
        return;
    }
    else if(computerChoice === 1 && humanChoice === 2 ||
            computerChoice === 0 && humanChoice === 1 ||
            computerChoice === 2 && humanChoice === 0){

        humanScore++;
        console.log("Player wins this round!!");
    }
    else{
        computerScore++;
        console.log("Computer wins this round!")
    }
}
function choiceEquivalent(choice){
    switch(choice){
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            return " ";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(`Player chose "${choiceEquivalent(humanChoice)}" and Computer chose "${choiceEquivalent(computerChoice)}"`);

        playRound(computerChoice, humanChoice);
    }
    
    if(humanScore - computerScore > 0)
        console.log("Player Wins The Game!");
    else if(humanScore === computerScore)
        console.log("It's a Tie!");
    else
        console.log("Computer wins :(");
}

playGame();

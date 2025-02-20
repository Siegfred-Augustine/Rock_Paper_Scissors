console.log("Rock Paper Scissors game");

let mainButton = document.createElement("button");
const playBtn = document.createElement("button");
playBtn.innerText = "Play";
playBtn.classList.add("mainButtons");
playBtn.onclick = ()=> playInput();
mainButton = playBtn;

const replayBtn = document.createElement("button");
replayBtn.innerText = "Next round";
replayBtn.classList.add("mainButtons");
replayBtn.onclick = ()=> nextRound();
replayBtn.style.fontSize = "30px";

const div = document.getElementById("vsPanel");
div.append(mainButton);

const rockBtn = document.getElementById("rockBtn");
rockBtn.onclick = ()=> getInput("rock");

const paperBtn = document.getElementById("paperBtn");
paperBtn.onclick = ()=> getInput("paper");

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.onclick = ()=> getInput("scissors");

const computerPanel = document.getElementById("computerSide");

let winner = document.getElementById("winnerBox");

let choice = "";

let counter = 0;

function getComputerChoice(){
    let choice = Math.round((Math.random() * 2));
    return choice;
}

function getHumanChoice (){
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
        winner.innerText = "It's a tie!!";
        return;
    }
    else if(computerChoice === 1 && humanChoice === 2 ||
            computerChoice === 0 && humanChoice === 1 ||
            computerChoice === 2 && humanChoice === 0){

        humanScore++;
        winner.innerText = "Player wins this round";
    }
    else{
        computerScore++;
        winner.innerText = "Computer wins this round";
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
    if(choice == ""){
        alert("Please Pick");
        return -1;
    }
    if(counter < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let computerChoiceElement = document.createElement("h3");
        computerChoiceElement.innerText = `Computer chose ${choiceEquivalent(computerChoice)}`;
        computerPanel.append(computerChoiceElement);
        
        playRound(computerChoice, humanChoice);
        counter++;
    }
    if (counter === 5) {
        if (humanScore > computerScore) {
            winner.innerText = "Player wins the game!";
        } else if (humanScore === computerScore) {
            winner.innerText = "The game is Tied!";
        } else {
            winner.innerText = "Computer wins the game!";
        }

        // ✅ Properly append the new game button
        const newBtn = document.createElement("button");
        newBtn.innerText = "New Game";
        newBtn.classList.add("mainButtons");
        newBtn.style.fontSize ="30px";
        newBtn.onclick = function () {
            div.replaceChild(playBtn, newBtn);
            counter = 0;
            choice = "";
            humanScore = 0;
            computerScore = 0;
            winner.innerText = "";
            computerPanel.removeChild(computerPanel.lastElementChild);
        };
        div.replaceChild(newBtn, playBtn);
    }
}

function getInput(input){
    choice = input;
}
function playInput(){
    if(playGame() === -1)
        return;
    div.replaceChild(replayBtn, mainButton);
}
function nextRound(){
    choice = "";
    if(counter>=5)
        counter = 0;
    div.replaceChild(playBtn, replayBtn);
    computerPanel.removeChild(computerPanel.lastElementChild);
    winner.innerText = "";
}
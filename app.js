const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


const result = document.querySelector(".result");
const text = document.createElement("h1");
const score = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

score.innerText = `Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
result.append(text, score);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice)
        text.textContent = `It's a tie! Both chose ${humanChoice}.`;
    
    if ((computerChoice === "scissors" && humanChoice == "rock") || (computerChoice === "rock" && humanChoice == "paper") || (computerChoice === "paper" && humanChoice == "scissors")){
        humanScore++;
        text.textContent = `You win this round!`;
    }
    else
    {
        computerScore++;
        text.textContent = "You lost this round!";
    }
        
    score.innerText = `Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    checkWinner();
}


function checkWinner(){
    if (humanScore === 5)
    {
        text.textContent = `Game Over - you Won!`;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5)
    {
        text.innerText = `Game Over - you Lost!`;
        humanScore = 0;
        computerScore = 0;
    }
}



[rock, paper, scissors].forEach((button) =>{
    button.addEventListener("click", () =>{
        playRound(button.id, getComputerChoice());
    })
})

// function called getComputerChoice

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1 )
        return "rock";
    else if (choice == 2)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice: (Rock, Paper, Scissors)");
    if (humanChoice !== null)
        humanChoice = humanChoice.toLowerCase().trim();

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    console.log("The computer choose", computerChoice);
    
    if (humanChoice === null)
        console.log("You canceled the game.");
    else if (computerChoice === humanChoice)
        console.log("Tie");
    else if ((computerChoice === "rock" && humanChoice == "scissors") || (computerChoice === "paper" && humanChoice == "rock") || (computerChoice === "scissors" && humanChoice == "paper")){
        console.log("You lost!");
        computerScore++;
    }
    else if ((computerChoice === "scissors" && humanChoice == "rock") || (computerChoice === "rock" && humanChoice == "paper") || (computerChoice === "paper" && humanChoice == "scissors")){
        console.log("You Won!");
        humanScore++;
    }
    else
        console.log("invalid choice.")

    console.log("Scores:\nHuman: ", humanScore,"\nComputer: ", computerScore);
}

let humanScore = 0;
let computerScore = 0;

function playGame(rounds){
    for (let i = 0; i < rounds; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
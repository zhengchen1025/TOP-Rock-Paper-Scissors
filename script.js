function getComputerChoice() {
  let a = Math.random();
  if (a > 0.66) {
    console.log("Computer picks scissors");
    return "scissors";
  } else if (a > 0.33 && a <= 0.66) {
    console.log("Computer picks paper");
    return "paper";
  } else {
    console.log("Computer picks rock");
    return "rock";
  }
}

function promptUserChoice() {
  let choice = prompt(
    "What's your choice: rock, paper or scissors?"
  ).toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    promptUserChoice();
  } else {
    console.log(`you picked ${choice}`);
    return choice;
  }
}

function singleRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log(`"You lose! ${computerSelection} beats ${playerSelection}"`);
    return "You lose";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`"You win! ${playerSelection} beats ${computerSelection}"`);
    return "You win";
  } else if (playerSelection == computerSelection) {
    console.log(`"You both picked ${computerSelection}, tie!"`);
    return "Tie";
  }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
  console.log("game starts");

  for (let i = 0; i < 5; i++) {
    console.log(`round ${i + 1}`);

    let playerSelection = promptUserChoice();

    let computerSelection = getComputerChoice();

    let result = singleRound(playerSelection, computerSelection);
    console.log(`result: ${result}`);

    if (result === "You win") {
      playerScore += 1;
    } else if (result === "You lose") {
      computerScore += 1;
    } else {
      console.log("Tie");
    }
    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
  }
}

playGame();

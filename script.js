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

function playGame(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log(`"You lose! ${computerSelection} beats ${playerSelection}"`);
    return "You lose! ${computerSelection} beats ${playerSelection}";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`"You win! ${playerSelection} beats ${computerSelection}"`);
    return "You win! ${playerSelection} beats ${computerSelection}";
  } else {
    console.log("tie!");
    return "tie!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

playGame(playerSelection, computerSelection);

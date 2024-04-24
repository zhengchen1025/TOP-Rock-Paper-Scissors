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

function singleRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    gameInfoDiv.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}`;
    return "You lose";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    gameInfoDiv.innerHTML += `You win! ${playerSelection} beats ${computerSelection}`;
    return "You win";
  } else if (playerSelection === computerSelection) {
    gameInfoDiv.innerHTML += `You both picked ${computerSelection}, tie!`;
    return "Tie";
  }
}

function calcScore() {
  if (result === "You win") {
    playerScore += 1;
  } else if (result === "You lose") {
    computerScore += 1;
  } else {
    console.log("Tie");
  }
  gameInfoDiv.innerHTML += `<p>Your score: ${playerScore}, Computer score: ${computerScore}</p>`;
  i++;
}

const gameInfoDiv = document.getElementById("gameInfo");
let playerScore = 0;
let computerScore = 0;
let i = 0;
let playerSelection;
let computerSelection = "";
let result;

document.addEventListener("DOMContentLoaded", function () {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", () => {
    playerSelection = "rock";
    gameInfoDiv.innerHTML += `<p>player picked ${playerSelection}</p>`;
    result = singleRound(playerSelection, computerSelection);
    calcScore();
    reset();
  });

  const paper = document.getElementById("paper");
  paper.addEventListener("click", () => {
    playerSelection = "paper";
    gameInfoDiv.innerHTML += `<p>player picked ${playerSelection}</p>`;
    result = singleRound(playerSelection, computerSelection);
    calcScore();
    reset();
  });

  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    gameInfoDiv.innerHTML += `<p>player picked ${playerSelection}</p>`;
    result = singleRound(playerSelection, computerSelection);
    calcScore();
    reset();
  });
});

function reset() {
  gameInfoDiv.innerHTML += `<p>round ${i + 1}</p>`;
  computerSelection = getComputerChoice();
  gameInfoDiv.innerHTML += `<p>please pick one</p>`;
}

gameInfoDiv.innerHTML += "<p>game starts</p>";
gameInfoDiv.innerHTML += `<p>round ${i + 1}</p>`;
computerSelection = getComputerChoice();
gameInfoDiv.innerHTML += `<p>please pick one</p>`;

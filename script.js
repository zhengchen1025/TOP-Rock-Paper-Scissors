const gameInfoDiv = document.getElementById("gameInfo");
let playerScore = 0;
let computerScore = 0;
let i = 0;
let humanChoice;
let computerChoice = "";
let result;

gameInfoDiv.innerHTML += "<p>Game starts</p>";
gameInfoDiv.innerHTML += `<p>Round ${i + 1}</p>`;
computerChoice = getComputerChoice();
gameInfoDiv.innerHTML += `<p>Please pick one</p> <br>######`;


// verified code

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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    gameInfoDiv.innerHTML += `Computer picked ${computerChoice} <br><br>
    You lose! ${computerChoice} beats ${humanChoice} <br>`;
    return "You lose";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    gameInfoDiv.innerHTML += `Computer picked ${computerChoice} <br><br>
    You win! ${humanChoice} beats ${computerChoice} <br>`;
    return "You win";
  } else if (humanChoice === computerChoice) {
    gameInfoDiv.innerHTML += `Computer picked ${computerChoice} <br><br>
    You both picked ${computerChoice}, tie! <br>`;
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

document.addEventListener("DOMContentLoaded", function () {
  const rock = document.getElementById("rock");
  rock.addEventListener("click", () => {
    humanChoice = "rock";
    gameInfoDiv.innerHTML += `<p>Player picked ${humanChoice}</p>`;
    result = playRound(humanChoice, computerChoice);
    calcScore();
    reset();
  });

  const paper = document.getElementById("paper");
  paper.addEventListener("click", () => {
    humanChoice = "paper";
    gameInfoDiv.innerHTML += `<p>Player picked ${humanChoice}</p>`;
    result = playRound(humanChoice, computerChoice);
    calcScore();
    reset();
  });

  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    gameInfoDiv.innerHTML += `<p>Player picked ${humanChoice}</p>`;
    result = playRound(humanChoice, computerChoice);
    calcScore();
    reset();
  });
});

function reset() {
  gameInfoDiv.innerHTML += `<p>Round ${i + 1}</p>`;
  computerChoice = getComputerChoice();
  gameInfoDiv.innerHTML += `<p>Please pick one</p> <br>######`;
}
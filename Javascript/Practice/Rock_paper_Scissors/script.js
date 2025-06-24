let randomNumber;
let computerMove;
let result;

function pickComputerMove() {
  randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "Scissors";
  }
}

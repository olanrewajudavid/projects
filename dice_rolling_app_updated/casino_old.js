const rollButton = document.getElementById("rollButton");
const humanRollDisplay = document.getElementById("humanRoll");
const computerRollDisplay = document.getElementById("computerRoll");
const winnerDisplay = document.getElementById("winner");

rollButton.addEventListener("click", function() {  // Anonymous function here
  const humanRoll = Math.floor(Math.random() * 6) + 1;
  const computerRoll = Math.floor(Math.random() * 6) + 1;

  humanRollDisplay.textContent = humanRoll;
  computerRollDisplay.textContent = computerRoll;

  // Update images for human

  if (humanRoll === 1) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice01.png"
  } else if (humanRoll === 2) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice02.png"
  }else if (humanRoll === 3) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice03.png"
  } else if (humanRoll === 4) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice04.png"
  } else if (humanRoll === 5) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice05.png"
  } else if (humanRoll === 6) {
    document.querySelector("#human-dice-iamge").src ="dice-images/dice06.png"
  }


   // Update images for computer

   if (computerRoll === 1) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice01.png"
  } else if (computerRoll === 2) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice02.png"
  }else if (computerRoll === 3) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice03.png"
  } else if (computerRoll === 4) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice04.png"
  } else if (computerRoll === 5) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice05.png"
  } else if (computerRoll === 6) {
    document.querySelector("#computer-dice-image").src ="dice-images/dice06.png"
  }

  if (humanRoll > computerRoll) {
    winnerDisplay.textContent = "You Win!";
  } else if (computerRoll > humanRoll) {
    winnerDisplay.textContent = "Computer Wins!";
  } else {
    winnerDisplay.textContent = "It is a tie!";
  }
}); // End of anonymous function
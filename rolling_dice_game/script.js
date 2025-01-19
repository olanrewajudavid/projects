// Get references to the HTML elements we'll be interacting with
const rollButton = document.getElementById("rollButton");
const humanRollDisplay = document.getElementById("humanRoll");
const computerRollDisplay = document.getElementById("computerRoll");
const winnerDisplay = document.getElementById("winner");

//Add event to the roll button
rollButton.addEventListener("click", rollDice)

function rollDice() {

    // Generate random rolls for human and comuter (1-6)
    const humanRoll = Math.floor(Math.random()*6) + 1
    const computerRoll = Math.floor(Math.random()*6) + 1

    //Display the roll on the web page
    humanRollDisplay.textContent = humanRoll
    computerRollDisplay.textContent = computerRoll

    if (humanRoll > computerRoll) {
        winnerDisplay.textContent = "You win!"
    } else if ( computerRoll > humanRoll) {
        winnerDisplay.textContent = "Computer Win"
    } else {winnerDisplay.textContent = "It's a tie"}
}
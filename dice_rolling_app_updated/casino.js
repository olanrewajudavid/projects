const history = []


console.log(history)            // computer, computer, game


const rollButton = document.getElementById("rollButton");
const humanRollDisplay = document.getElementById("humanRoll");
const computerRollDisplay = document.getElementById("computerRoll");
const winnerDisplay = document.getElementById("winner");


const playGame = () => {
 // 1. Roll a dice for each player (human, computer) 
 const humanRoll = Math.floor(Math.random() * 6) + 1;
 const computerRoll = Math.floor(Math.random() * 6) + 1;


 // 2. Update the user interface to display the rolls
 humanRollDisplay.innerText = humanRoll;
 computerRollDisplay.innerText = computerRoll;


  // 3.  TODO: Also update the dice images here


   // 3a. update the images for the human
   document.querySelector("#human-dice-image").src = `dice0${humanRoll}.png`
    // 3b. update the images for the computer
   document.querySelector("#computer-dice-image").src = `dice0${computerRoll}.png`




// 4. checking who the winner is, and output to the screen
if (humanRoll > computerRoll) {
   winnerDisplay.textContent = "You Win!";
   // 5. After calculating a winner, then save the winner to the history array
   // history.push("human")
   history.push({winner:"human", humanScore:humanRoll, computerScore:computerRoll, date:Date()})
 } else if (computerRoll > humanRoll) {
   winnerDisplay.textContent = "Computer Wins!";
   // 5. After calculating a winner, then save the winner to the history array
   // history.push("computer")
   history.push({winner:"computer", humanScore:humanRoll, computerScore:computerRoll, date:Date()})
 } else {
   winnerDisplay.textContent = "It is a tie!";
   // 5. After calculating a winner, then save the winner to the history array
   //history.push("tie")
   history.push({winner:"tie", humanScore:humanRoll, computerScore:computerRoll, date:Date()})
 }


 // 6. DEBUG: output the history of your games
 console.log(history)
}


const showHistory = () => {
   // 1. Clear the <ol> of any existing data
   document.querySelector("#history-container").innerHTML = ""


   // 2. loop through our array and for each item in the array, output to the screen
   for (let i = 0; i < history.length; i++) {
       // for each item in the list, create corresponding li item
       // and append that li item to the end of the <ol>
       document.querySelector("#history-container").innerHTML += `
           <div style="border-bottom:1px solid grey;">
               <p>Date played: ${history[i].date}</p>
               <p>Human Score: ${history[i].humanScore}</p>
               <p>Computer Score: ${history[i].computerScore}</p>
               <p>Winner: ${history[i].winner}</p>               
           <div>


       `
   }
}


rollButton.addEventListener("click", playGame);
document.querySelector("#showHistoryButton").addEventListener("click", showHistory);
const choices= [`rock`, `paper`, `scissor`];
const playerDisplay = document.getElementById(`playerDisplay`);
const computerDisplay = document.getElementById(`computerDisplay`);
let result= document.getElementById(`result`);
let playerCount= 0;
let computerCount= 0;





function playGame(playerChoice){
    let computerChoice= choices[Math.floor(Math.random()*3)];
    if (playerChoice== `rock`&& computerChoice ==`scissor`  
        || playerChoice== `paper` && computerChoice== `rock`
         || playerChoice== `scissor`&& computerChoice== `paper`){
            result.textContent= `You win!`;
            result.style.color= `green`;
            playerCount++;
            playerDisplay.textContent= `PLAYER: ${playerCount}`;
         }
         else if(computerChoice== `rock`&& playerChoice ==`scissor`  
            || computerChoice== `paper` && playerChoice== `rock`
             || computerChoice== `scissor`&& playerChoice== `paper`){
             result.textContent= `The computer wins`
             result.style.color= `red`;
             computerCount++;
             computerDisplay.textContent= `COMPUTER: ${computerCount}`
         }
         else{
            result.textContent= `It is tie`
            result.style.color= `blue`
         }
}
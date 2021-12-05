let playerScore = 0;
let computerScore = 0;
var playerScore_span = document.getElementById("player-score");
var computerScore_span = document.getElementById("computer-score");
var result_p = document.querySelector(".result > p"); 
var endgame = document.getElementById("endgame1")
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");




function getComputerChoice(){
    const choices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice());

function convertToWord(letter){
   if (letter === "r") return "Rock";
   if (letter === "p") return "Paper";
   return "Scissors";
}

function win(userChoice, computerChoice){
   playerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
   eindeRonde(playerScore, computerScore);
}

function lose(userChoice, computerChoice){
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lose! :(";       
    eindeRonde(playerScore, computerScore);
}

function draw(userChoice, computerChoice){
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Try again!";   
    eindeRonde(playerScore, computerScore);
}




function game(userChoice){
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log("You Win!");
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose((userChoice, computerChoice));
            break;
            // console.log("You Lose! :(");
           
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
            // console.log("Draw!");
    }
}



function main(){

rock.addEventListener("click", function(){
    game("r"); 
})

paper.addEventListener("click", function(){
    game("p"); 
})

scissors.addEventListener("click", function(){
    game("s"); 
})
}

main();

function eindeRonde() {
    if (playerScore !== 3 && computerScore !== 3) {
    //    result_p();
    }
    else {
       if (playerScore > computerScore) {
        // result_p();
          endgame.innerHTML = `<center><img src="./img/win.png" alt=""></img><br><button onClick=history.go(0);>Play again?</button>`
       }
       else {
        // result_p();
          endgame.innerHTML = `<center><img src="./img/lose.png" alt=""></img><br><button onClick=history.go(0);>Play again?</button>`
       }
    }
 }
  
  








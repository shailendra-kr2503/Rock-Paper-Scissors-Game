let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else { 
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

}


const playGame = (userChoice) =>{
    // generate computer choice
    const compChoice = genCompChoice();
     
    if(userChoice === compChoice){
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp =  paper , scissor
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // comp = rock , scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // comp = rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})  
let usrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrScoreValue = document.querySelector("#usrScore");
const compScoreValue = document.querySelector("#compScore");

const compChoiceGenerate = () =>{
    const options = ["rock", "paper", "scissor"]
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () =>{
    console.log("Game is draw!");
    msg.innerText = "It is Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin){
        usrScore +=1;
        usrScoreValue.innerText = usrScore;
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green";
    }else{
        compScore += 1;
        compScoreValue.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate Computer Choice
    compChoice = compChoiceGenerate();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "scissor" ? true : false;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }else{
            // rock, paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id")
        playGame(userChoice);
    })
});
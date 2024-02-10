let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game was Draw.")
    msg.innerText = ("Game was Draw. Play Again!")
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin) {
        console.log("You Win.");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = ("You Win!");
        msg.style.backgroundColor = 'green';
    }
    else { 
        console.log('You Lose.'); 
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = ("You Lose!")
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice(); 
    console.log("Computer Choice =", compChoice);

    if(userChoice===compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==='rock') {
            userWin = compChoice=== 'paper' ? false : true; 
        } else if(userChoice==='paper') {
            userWin = compChoice==="scissors" ? false : true;
        } else {
            userWin = compChoice==='rock' ? false : true;
        }
        showWinner(userWin);
        }
    }; 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});
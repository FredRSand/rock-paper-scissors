let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fisticle_div = document.getElementById("r");
const handsign_div = document.getElementById("p");
const peacesign_div = document.getElementById("s");

const getComputerChoice = () => {
const choices = ['r','p','s'];
const randomNumber = (Math.floor(Math.random() * 3));
return choices [randomNumber];
}

const convertToWord = (letter) => {
 if (letter === "r") return "Rock";
 if (letter ==="p") return "Paper";
return "Scissors";
}

const win = (userChoice,computerChoice) => {
userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} . You win !`;
   document.getElementById(userChoice).classList.add('green-glow');
setTimeout(() => {
   document.getElementById(userChoice).classList.remove('green-glow');
}, 299);
}


    const lose = (userChoice,computerChoice) => {
    computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} . You Suck loser !`;
       document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {
       document.getElementById(userChoice).classList.remove('red-glow');
    }, 299);
    }

    const draw = (userChoice,computerChoice) => {
        userScore;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)} cant beat ${convertToWord(computerChoice)} ! DRAWWW !`;
       document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => {
       document.getElementById(userChoice).classList.remove('grey-glow');
    }, 299);
        }


const game = (userChoice) => {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
         win(userChoice, computerChoice);
     break;
    case "rp":
    case "ps":
    case "sr":
         lose(userChoice, computerChoice);
     break;
    case "rr":
    case "pp":
    case "ss":
         draw(userChoice, computerChoice);
     break;
}
}



const main = () => {
    fisticle_div.addEventListener('click',() => {
    game("r");
    })

    handsign_div.addEventListener('click',() => {
    game("p")
    })

    peacesign_div.addEventListener('click',() => {
    game("s")
    })
    }

main()
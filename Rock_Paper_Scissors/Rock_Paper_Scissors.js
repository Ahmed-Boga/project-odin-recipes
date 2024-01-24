const playerPick = document.querySelector(".RPS");
const playerimg = document.querySelector(".playerOneimg");
const pcimg = document.querySelector(".pcimg");
const pcpick = document.querySelector(".pcpick");
const dualstatus = document.querySelector("#dualh1");
const dualstatusbutton = document.querySelector(".statusbutton");
let playeronech;
let gameStatus = 0;
let pcchoies;
let pPRS;

dualstatusbutton.addEventListener("click", theGame);

function theGame() {
  dualstatus.innerHTML = "Lets Go";
  for (const iterator of playerPick.children) {
    iterator.hidden = false;
  }
  playerPick.addEventListener("click", (event) => {
    event.preventDefault();
    let pickedRPS = Math.ceil(Math.random() * 3);
    switch (pickedRPS) {
      case 1:
        pPRS = "rock";
        break;
      case 2:
        pPRS = "paper";
        break;
      case 3:
        pPRS = "scissors";
        break;

      default:
        break;
    }
    pcpick.innerHTML = pPRS.toUpperCase();
    playeronech = event.target.value;
    playerimg.setAttribute("src", `./${playeronech}.png`);
    // console.log(event.target.parentElement.children[0].value);
    // console.log(event.target.parentElement.children[0]);
    for (const key of event.target.parentElement.children) {
      if (key.value !== playeronech) {
        console.log(key);
        key.hidden = true;
      }
    }

    console.log(event.target.value);
    console.log(pPRS);
    pcimg.setAttribute("src", `./${pPRS}.png`);
    WhoWins(playeronech, pPRS);
  });
}
function WhoWins(poen, ptwo) {
  if (poen == ptwo) {
    // gameStatus = 1;
    dualstatus.innerHTML = "Drow";
    return "Tie";
  } else if (
    (poen == "rock" && ptwo == "paper") ||
    (poen == "scissors" && ptwo == "rock") ||
    (poen == "paper" && ptwo == "scissors")
  ) {
    dualstatus.innerHTML = "PC Wins";
    return "PC Wins";
  } else {
    dualstatus.innerHTML = "Player one Wins";
    return "Player one Wins";
  }
}

const btnROCK = document.getElementById("btnROCK");
const btnPAPER = document.getElementById("btnPAPER");
const btnSCISSORS = document.getElementById("btnSCISSORS");
const screenScorePc = document.getElementById("scorePC");
const screenScoreUser = document.getElementById("scoreUSER");
const screenWinner = document.getElementById("winner");
const screenWinnerP = document.getElementById("winnerP");

btnROCK.addEventListener("click", () => {
	/* console.log("btnROCK clicked!"); */
	game("ROCK");
});
btnPAPER.addEventListener("click", () => {
	/* console.log("btnPAPER clicked!"); */
	game("PAPER");
});
btnSCISSORS.addEventListener("click", () => {
	/* console.log("btnSCISSORS clicked!"); */
	game("SCISSORS");
});

var playerScore = 0;
var computerScore = 0;

function computerPlay() {
	const tokens = ["ROCK", "PAPER", "SCISSORS"];
	const random = Math.floor(Math.random() * tokens.length);
	/* console.log(random, tokens[random]) */
	const computerSelection = tokens[random];
	return computerSelection;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "DRAW";
	} else if (playerSelection === "ROCK") {
		switch (computerSelection) {
			case "PAPER":
				return "You lost";
			case "SCISSORS":
				return "You win";
		}
	} else if (playerSelection === "PAPER") {
		switch (computerSelection) {
			case "SCISSORS":
				return "You lost";
			case "ROCK":
				return "You win";
		}
	} else if (playerSelection === "SCISSORS") {
		switch (computerSelection) {
			case "ROCK":
				return "You lost";
			case "PAPER":
				return "You win";
		}
	}
}

function game(playerSelection) {
	let computerSelection;
	screenScorePc.setAttribute("style", "visibility: visible;");
	screenScoreUser.setAttribute("style", "visibility: visible;");
	/* console.log(playerSelection); */
	computerSelection = computerPlay();
	let result = playRound(playerSelection, computerSelection);
	/* console.log(result); */
	if (result === "You lost") {
		score("playerLOST");
	} else if (result === "You win") {
		score("playerWIN");
	}
}

function resetScore() {
	playerScore = 0;
	computerScore = 0;
}

function score(result) {
	screenScorePc.textContent = "Computer score is: " + computerScore;
	screenScoreUser.textContent = "Player score is: " + playerScore;
	if (result === "playerLOST") {
		computerScore++;
		console.log(`Computer score is: ${computerScore}`);
		screenScorePc.textContent = "Computer score is: " + computerScore;
	} else if (result === "playerWIN") {
		playerScore++;
		console.log(`Player score is: ${playerScore}`);
		screenScoreUser.textContent = "Player score is: " + playerScore;
	}
	if (playerScore != 0 || computerScore != 0) {
		screenWinnerP.textContent = "GOOD LUCK!";
	}
	if (playerScore === 5) {
		screenScorePc.setAttribute("style", "visibility:hidden;");
		screenScoreUser.setAttribute("style", "visibility:hidden;");
		screenWinner.setAttribute("style", "visibility: visible;");
		screenWinnerP.textContent = "The winner is: PLAYER!";
		screenWinnerP.setAttribute("style", "visibility: visible;");
		resetScore();
		console.log(`PLAYER WINS!`);
	} else if (computerScore === 5) {
		screenScorePc.setAttribute("style", "visibility:hidden;");
		screenScoreUser.setAttribute("style", "visibility:hidden;");
		screenWinner.setAttribute("style", "visibility: visible;");
		screenWinnerP.textContent = "The winner is: PC!";
		screenWinnerP.setAttribute("style", "visibility: visible;");
		resetScore();
		console.log(`COMPUTER WINS!`);
	}
}

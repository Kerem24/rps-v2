let pc;

let pcScore = 0;
let playerScore = 0;

const playerSelection = document.querySelectorAll("button");

const result = document.querySelector("#result");
const message = document.querySelector("#message");
const score = document.querySelector("#score");


const showResult = (text, type) => {
    message.textContent = text;
    score.textContent = `Player: ${playerScore} - Computer: ${pcScore}`;
    result.className = type;
};

// computer
const computerSelection = () => {
    const random = Math.floor(Math.random() * 3);
    return random === 0 ? "rock" : random === 1 ? "paper" : "scissors"
}


const playRound = function() {
    playerSelection.forEach((player) =>{
        player.addEventListener("click", () => {

            pc = computerSelection();

            if (player.id === pc) {
                console.log("draw")
                console.log(`Player: ${playerScore}`, `Computer: ${pcScore}`)
                showResult(`Draw! Both chose ${pc}`, "draw")
            }
            if (player.id === "rock" && pc === "scissors") {
                playerScore = playerScore + 1
                console.log("Player won\n", `Player: ${playerScore}\n`, `Computer: ${pcScore}`)
                showResult(`You won! ${player.id} beats ${pc}`, "win")
            } else if (player.id === "paper" && pc === "rock") {
                playerScore = playerScore + 1
                console.log("Player won\n", `Player: ${playerScore}\n`, `Computer: ${pcScore}`)
                showResult(`You won! ${player.id} beats ${pc}`, "win")
            } else if (player.id === "scissors" && pc === "paper") {
                playerScore = playerScore + 1
                console.log("Player won\n", `Player: ${playerScore}\n`, `Computer: ${pcScore}`)
                showResult(`You won! ${player.id} beats ${pc}`, "win")


            } else if (pc === "rock" && player.id === "scissors") {
                pcScore = pcScore + 1
                console.log("Computer won\n", `Computer: ${pcScore}\n`, `Player: ${playerScore}`)
                showResult(`You lost! ${pc} beats ${player.id}`, "lose")
            } else if (pc === "paper" && player.id === "rock") {
                pcScore = pcScore + 1
                console.log("Computer won\n", `Computer: ${pcScore}\n`, `Player: ${playerScore}`)
                showResult(`You lost! ${pc} beats ${player.id}`, "lose")
            } else if (pc === "scissors" && player.id === "paper") {
                pcScore = pcScore + 1
                console.log("Computer won\n", `Computer: ${pcScore}\n`, `Player: ${playerScore}`)
                showResult(`You lost! ${pc} beats ${player.id}`, "lose")
            }

            if (playerScore === 5) {
                console.log("Player won the match!\n", `Player: ${playerScore} - Computer: ${pcScore}`);
                showResult("🏆 You won the match!", "win")
                playerSelection.forEach((player) => {
                    player.style.display = "none";
                });

                const playAgain = document.createElement("button")
                playAgain.classList.add("playAgain")
                document.body.appendChild(playAgain)
                playAgain.textContent = "Play"

                playAgain.addEventListener("click", () => {
                    playerScore = 0;
                    pcScore = 0;

                    playerSelection.forEach((player) => {
                        player.style.display = "";
                    });

                    playAgain.remove();
                    showResult("New game! First to 5 wins", "")
                })


            } else if (pcScore === 5) {
                console.log("Computer won the match!\n", `Computer: ${pcScore} - Player: ${playerScore}`)
                showResult("💀 Computer won the match!", "lose")
                playerSelection.forEach((player) => {
                    player.style.display = "none";
                });

                const playAgain = document.createElement("button")
                playAgain.classList.add("playAgain")
                document.body.appendChild(playAgain)
                playAgain.textContent = "Play"

                playAgain.addEventListener("click", () => {
                    playerScore = 0;
                    pcScore = 0;

                    playerSelection.forEach((player) => {
                        player.style.display = "";
                    });

                    playAgain.remove();
                    showResult("New game! First to 5 wins", "")
                })
            }

        });
    });
}
playRound()
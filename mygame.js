const score = document.querySelector("#score");
const playerOneScore = document.querySelector("#playerOneScore")
const playerTwoScore = document.querySelector("#playerTwoScore")
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const reset = document.querySelector("#reset");
const games = document.querySelector("#games")

let scoreOne = playerOneScore;
scoreOne = 0;
let scoreTwo = playerTwoScore;
scoreTwo = 0;
let numGames = 5;

const game = function () {
    playerOne.addEventListener("click", function () {
        playerOneScore.innerHTML = ++scoreOne
        if (scoreOne >= numGames) {
            playerOne.disabled = true;
            playerTwo.disabled = true;
            playerOneScore.style.color = "green";
            playerTwoScore.style.color = "red";
        }
    })

    playerTwo.addEventListener("click", function () {
        playerTwoScore.innerHTML = ++scoreTwo
        if (scoreTwo >= numGames) {
            playerOne.disabled = true;
            playerTwo.disabled = true;
            playerOneScore.style.color = "red";
            playerTwoScore.style.color = "green";
        }
    })

    games.addEventListener("change", function () {
        numGames = parseInt(games.value);
    });
}
game();

reset.addEventListener("click", () => resetGame());

const resetGame = function () {
    scoreOne = 0;
    scoreTwo = 0;
    playerOne.disabled = false;
    playerTwo.disabled = false;
    playerOneScore.innerHTML = 0
    playerTwoScore.innerHTML = 0;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
}


// Array of possible choices
const choices = ["Rock", "Paper", "Scissors"];
// Initialize player and computer scores, and game counter
let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

// Get all buttons with the class ".button"
const allButtons = document.querySelectorAll(".button");
// Get score display elements
const scorePlayerDiv = document.getElementById("score-player");
const scoreCompDiv = document.getElementById("score-comp");
const gamesDiplay = document.getElementById("games");
// Get log display element
const logDisplay = document.getElementById("log");

// Attach click event listeners to all buttons
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-input");
        const computerChoice = setComputerChoice();
        game(playerChoice, computerChoice);
    });
});

// Function to randomly choose computer's choice
function setComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Main game function
function game(playerChoice, computerChoice) {
    gameCounter++;

    // Check for a tie
    if (playerChoice == computerChoice) {
        log(`The computer's choice was: ${computerChoice}.Tie!`);
    } else {
        // Get the result of the game
        const result = getResult(playerChoice, computerChoice);
        log(`The computer's choice was: ${computerChoice}. ${result}`);
        // Update the scores based on the result
        updateScore(result);
    }

    // Update the HTML display with the current scores and game count
    updateHTMLScore();
}

// Determine the result of the game based on player and computer choices
function getResult(player, computer) {
    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "You won!";
    } else {
        return "You lost!";
    }
}

// Update scores based on the game result
function updateScore(result) {
    if (result === "You won!") {
        playerScore++;
    } else {
        computerScore++;
    }
}

// Update the HTML display with the current scores and game count
function updateHTMLScore() {
    scorePlayerDiv.textContent = playerScore;
    scoreCompDiv.textContent = computerScore;
    gamesDiplay.textContent = gameCounter;
}

// Display log messages in the HTML
function log(message) {
    logDisplay.textContent = message;
}
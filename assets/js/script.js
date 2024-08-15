/**
 * declare variables for DOM elements
 */
const displayComputerChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('results-message');
let choice;
let computerChoice;
let result;
// Array of possible game outcomes
const outcomes = [
    { player: '🪨', computer: '📜', message: "Paper covers rock! You lose!", result: 2 },
    { player: '🪨', computer: '✂️', message: "Rock blunts scissors! You win!", result: 1 },
    { player: '🪨', computer: '🖖', message: "Spock vaporizes rock! You lose!", result: 2 },
    { player: '🪨', computer: '🦎', message: "Rock crushes lizard! You win!", result: 1 },
    { player: '📜', computer: '🪨', message: "Paper covers rock! You win!", result: 1 },
    { player: '📜', computer: '✂️', message: "Scissors cut paper! You lose!", result: 2 },
    { player: '📜', computer: '🖖', message: "Paper disproves Spock! You win!", result: 1 },
    { player: '📜', computer: '🦎', message: "Lizard eats paper! You lose!", result: 2 },
    { player: '✂️', computer: '🪨', message: "Rock blunts scissors! You lose!", result: 2 },
    { player: '✂️', computer: '📜', message: "Scissors cut paper! You win!", result: 1 },
    { player: '✂️', computer: '🖖', message: "Spock smashes scissors! You lose!", result: 2 },
    { player: '✂️', computer: '🦎', message: "Scissors decapitates lizard! You win!", result: 1 },
    { player: '🖖', computer: '🪨', message: "Spock vaporizes rock! You win!", result: 1 },
    { player: '🖖', computer: '📜', message: "Paper disproves Spock! You lose!", result: 2 },
    { player: '🖖', computer: '✂️', message: "Spock smashes scissors! You win!", result: 1 },
    { player: '🖖', computer: '🦎', message: "Lizard poisons Spock! You lose!", result: 2 },
    { player: '🦎', computer: '🪨', message: "Rock crushes lizard! You lose!", result: 2 },
    { player: '🦎', computer: '📜', message: "Lizard eats paper! You win!", result: 1 },
    { player: '🦎', computer: '✂️', message: "Scissors decapitates lizard! You lose!", result: 2 },
    { player: '🦎', computer: '🖖', message: "Lizard poisons Spock! You win!", result: 1 }
];
// add event listeners for buttons
// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('class') === 'btn') {
                choice = this.textContent;
                displayPlayerChoice.innerHTML = choice;
                createComputerChoice();
                calculateResult();
                updateTally();
            }
        });
    }
});
/**
 * resets tally by refreshing page
 */
function refreshPage() {
    window.location.reload();
}

/**
 * Generates a random choice for the computer and updates the DOM.
 */
function createComputerChoice() {
    const choices = ['🪨', '📜', '✂️', '🖖', '🦎'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    displayComputerChoice.innerHTML = computerChoice;
}

/**
 * Calculates the game result based on player and computer choices.
 * Updates the resultMessage and result variables, and displays the result.
 */
function calculateResult() {
    // check for draw
    if (choice === computerChoice) {
        resultMessage = "It's a draw! Play Again!";
        result = 0;
    } else {
        // loop through outcomes array to find matching outcome
        let outcome;
        for (let i = 0; i < outcomes.length; i++) {
            if (outcomes[i].player === choice && outcomes[i].computer === computerChoice) {
                outcome = outcomes[i];
                break; // stop looping once the match has been found
            }
        }
        if (outcome) {
            resultMessage = outcome.message;
            result = outcome.result;
        }
    }
    displayResult.innerHTML = resultMessage;
}

/**
 * Create a function to update player
 * and computer tally
 * Credit Code Institute - Love Maths tutor
 */
function updateTally() {
    if (result === 1) {
        let oldPlayerTally = parseInt(document.getElementById('player-tally').innerText);
        document.getElementById('player-tally').innerText = ++oldPlayerTally;
    } else if (result === 2) {
        let oldComputerTally = parseInt(document.getElementById('computer-tally').innerText);
        document.getElementById('computer-tally').innerText = ++oldComputerTally;
    }
}
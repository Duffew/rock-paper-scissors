/* declare variables for DOM elements
Credit Ania Kobow - Code With Ania Kubow - 
youTube */

const displayCompterChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('results-message');
let buttons = ['rock', 'paper', 'scissors'];
let choice;
let randomNumber;
let computerChoice;
let result;

// add event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('class') === 'btn');
            choice = this.textContent;
            displayPlayerChoice.innerHTML = choice;
            createComputerChoice();
            calculateResult();
        })
    }
})

/**
 * Create a function for a random computer chioce
 * Credit Ania Kobow - Code With Ania Kubow - 
 * youTube
 */
function createComputerChoice() {
    randomNumber = Math.floor(Math.random() * buttons.length);

    if (randomNumber === 0) {
        computerChoice = '👊'
    }
    if (randomNumber === 1) {
        computerChoice = '🤚'
    }
    if (randomNumber === 2) {
        computerChoice = '✌'
    }
    displayCompterChoice.innerHTML = computerChoice;
}

/**
 * Create a function for calulating game result
 * Credit Ania Kobow - Code With Ania Kubow - 
 * youTube
 */
function calculateResult() {
    if (choice === computerChoice) {
        result = "It's a draw!"
    }
    if (choice === '👊' && computerChoice === '🤚') {
        result = "You lose!"
    }
    if (choice === '👊' && computerChoice === '✌') {
        result = "You win!"
    }
    if (choice === '🤚' && computerChoice === '✌') {
        result = "You lose!"
    }
    if (choice === '🤚' && computerChoice === '👊') {
        result = "You win!"
    }
    if (choice === '✌' && computerChoice === '👊') {
        result = "You lose!"
    }
    if (choice === '✌' && computerChoice === '🤚') {
        result = "You win!"
    }
    displayResult.innerHTML = result;
}
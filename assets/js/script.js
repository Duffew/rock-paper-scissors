/* declare variables for DOM elements
Credit Ania Kobow - Code With Ania Kubow - 
youTube */

const displayCompterChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('results-message');
let buttons = ['rock', 'paper', 'scissors'];
let choice;
let computerChoice;
let resultMessage;
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
            updateTally();
        })
    }
})

/**
 * Create a function for a random computer chioce
 * Credit Ania Kobow - Code With Ania Kubow - 
 * youTube
 */
function createComputerChoice() {
    let randomNumber = Math.floor(Math.random() * buttons.length);

    if (randomNumber === 0) {
        computerChoice = '🪨'
    }
    if (randomNumber === 1) {
        computerChoice = '📜'
    }
    if (randomNumber === 2) {
        computerChoice = '✂️'
    }
    if (randomNumber === 3) {
        computerChoice = '🖖'
    }
    if (randomNumber === 4) {
        computerChoice = '🦎'
    }
    displayCompterChoice.innerHTML = computerChoice;
}

/**
 * Create a function for calulating game result
 * Credit Ania Kobow - Code With Ania Kubow - 
 * youTube
 */
function calculateResult() {
    //draw
    if (choice === computerChoice) {
        resultMessage = "It's a draw! Play Again!"
        result = 0
    }
    //player chooses rock
    if (choice === '🪨' && computerChoice === '📜') {
        resultMessage = "Paper covers rock! You lose!"
        result = 2
    }
    if (choice === '🪨' && computerChoice === '✂️') {
        resultMessage = "Rock blunts scissors! You win!"
        result = 1
    }
    if (choice === '🪨' && computerChoice === '🖖') {
        resultMessage = "Spock vaporizes rock! You lose!"
        result = 2
    }
    if (choice === '🪨' && computerChoice === '🦎') {
        resultMessage = "Rock crushes lizard! You win!"
        result = 1
    }
    //player chooses paper
    if (choice === '📜' && computerChoice === '🪨') {
        resultMessage = "Paper covers rock! You win!"
        result = 1
    }
    if (choice === '📜' && computerChoice === '✂️') {
        resultMessage = "Scissors cut paper! You lose!"
        result = 2
    }
    if (choice === '📜' && computerChoice === '🖖') {
        resultMessage = "Paper disproves Spock! You win!"
        result = 1
    }
    if (choice === '📜' && computerChoice === '🦎') {
        resultMessage = "Lizard eats paper! You lose!"
        result = 2
    }
     //player chooses scissors
     if (choice === '✂️' && computerChoice === '🪨') {
        resultMessage = "Rock blunts scissors! You lose!"
        result = 2
    }
    if (choice === '✂️' && computerChoice === '📜') {
        resultMessage = "Scissors cut paper! You win!"
        result = 1
    }
    if (choice === '✂️' && computerChoice === '🖖') {
        resultMessage = "Spock smashes scissors! You lose!"
        result = 2
    }
    if (choice === '✂️' && computerChoice === '🦎') {
        resultMessage = "Scissors decapitates lizard! You win!"
        result = 1
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
    }
    if (result === 2) {
        let oldComputerTally = parseInt(document.getElementById('computer-tally').innerText);
        document.getElementById('computer-tally').innerText = ++oldComputerTally;
    }
}
/* declare variables for DOM elements
Credit Ania Kobow - Code With Ania Kubow - 
youTube */

const displayCompterChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('results-message');
let buttons = ['rock', 'paper', 'scissors'];

// add event listeners for buttons
document.addEventListener("DOMContentLoaded", function() {
    buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('class') === 'btn');
            choice = this.textContent;
            console.log(choice);
        })
    }
})

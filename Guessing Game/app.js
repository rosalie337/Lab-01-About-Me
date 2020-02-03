import checkNumbers from './guesser.js';

const userInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const tempContainer = document.getElementById('temporary-number');
const resultContainer = document.getElementById('result-container');

const tempDisplay = document.getElementById('diplay-high');
const resultDisplay = document.getElementById('win-display');
const triesDisplay = document.getElementById('attempts');
let tries = 4;

let correctNumber = Math.floor(Math.random() * 10);
submitButton.addEventListener('click', () => {
    tries = tries - 1;
    // tries--;

    triesDisplay.textContent = tries;
    if (checkNumbers(Number(userInput.value), correctNumber) === -1) {
        tempDisplay.textContent = 'too low!';
        tempContainer.classList.remove('hidden');
    }
    if (checkNumbers(Number(userInput.value), correctNumber) === 1) {
        tempDisplay.textContent = 'too high!';
        tempContainer.classList.remove('hidden');
    }
    if (checkNumbers(Number(userInput.value), correctNumber) === 0) {
        tempDisplay.textContent = 'Correct!';
        tempContainer.classList.remove('hidden');
        resultContainer.classList.remove('hidden');
        submitButton.disabled = true;
    }
    if (tries === 0 && checkNumbers(Number(userInput.value), correctNumber) !== 0) {
        submitButton.disabled = true;
        resultContainer.classList.remove('hidden');
        resultDisplay.textContent = 'Inncorrect! Better luck next time.';
    }
});

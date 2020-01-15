

import isYes from './isYes.js';

const quizbutton = document.getElementById('QuizButton');
const total = document.getElementById('total');

quizbutton.addEventListener('click', () => {
    const name = prompt('Please tell us your name?');

    const confirmation = confirm(`${name}, are you sure you are ready?`);
    if (confirmation === false) {
        return;
    }

        /// three prompts
    const answerOne = prompt('Has Rosalie lived in Oregon?');
    const answerTwo = prompt('Was Rosalie born in the Philippines?');
    const answerThree = prompt('Was Rosalie\'s s father in the Military?');
    
        // starting count at zero
    let count = 0;
    
        //incrementing the count if the answer is Not yes or y
    if (isYes(answerOne)) count += 1;
        //incrementing the count if the answer is Not yes or y
    if (isYes(answerTwo)) count += 1;
        //incrementing the count if the answer is Not yes or y
    if (isYes(answerThree)) count += 1;

    total.textContent = `${name}, you got ${count} correct, was that best you could do?`;
});
    

console.log('I\'ve never done this before');
    

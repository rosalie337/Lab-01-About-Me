import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
const totalScore = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const nameFirst = prompt('Please tell us your name?');
    const confirmation = confirm(`${nameFirst}, are you sure you are ready?`);
    if (confirmation === false) {
        return;
    }

        /// three prompts to get text response from user
    const answerOne = prompt('Has Rosalie lived in Oregon?');
    const answerTwo = prompt('Was Rosalie born in the Philippines?');
    const answerThree = prompt('Was Rosalie\'s s father in the Military?');
    
        // starting score at zero
    let count = 0;
    
        //incrementing the score if the answer is Not yes or y
    if (isYes(answerOne)) count += 1;
    if (isYes(answerTwo)) count += 1;
    if (isYes(answerThree)) count += 1;
  
    totalScore.textContent = `${nameFirst}, you got ${count} questions correct`;
});
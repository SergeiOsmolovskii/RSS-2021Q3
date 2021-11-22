import {main, TOTAL_QUESTIONS_IN_ROUND} from './variables.js';

import {isTrueAnswer} from './addQuiz.js';
import generateAnswerInfo from './generateAnswerInfo.js';


const timerDisplay = document.querySelector('.time');
let countdown;

export const timer = async (seconds) => {

    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval( async () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        const currentQuestionNumber = sessionStorage.currentQuestion - 1;
        const questionGroup = sessionStorage.questionGroup;
        console.log(currentQuestionNumber)
        if (sessionStorage.currentQuestion == TOTAL_QUESTIONS_IN_ROUND) {
            clearInterval(countdown);
            timerDisplay.textContent = '';
        }

        if (secondsLeft < 0) {

            isTrueAnswer(timerDisplay, currentQuestionNumber);
            clearInterval(countdown);

            if (sessionStorage.category === 'Artist') {
                await generateAnswerInfo(currentQuestionNumber, questionGroup);
            } else {
                const trueAnswer = document.querySelector('.correct');
                const trueAnswerNumber = trueAnswer.dataset.number; 
                await generateAnswerInfo(currentQuestionNumber, questionGroup, trueAnswerNumber);
            } 

            const roundResult = document.querySelector('.result-answer');
            setTimeout(() => {
                roundResult.style.opacity = 1;
                roundResult.style.top = 0;
            }, 100);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

    setTimeout(() => {
        const answerButtons = document.querySelectorAll('.answer-button');
        answerButtons.forEach(item => {
            item.addEventListener('click', () => {
                clearInterval(countdown);
                console.log(item);
            })
        })
    }, 1500);



}

export const displayTimeLeft = (seconds) => {
    const remainderSeconds = seconds % 60;
    const display = `${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timerDisplay.textContent = display;
}

export const startTimer = () => {
    const seconds = parseInt(localStorage.getItem('roundTime'));
    timer(seconds);
}


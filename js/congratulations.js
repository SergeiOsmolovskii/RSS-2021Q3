import {TOTAL_QUESTIONS_IN_ROUND, main} from './variables.js';
const STARS_COUNT = 5;

const congratulations = () => {
    const congratulationsDiv = document.createElement('DIV');
    const congratulationsText = document.createElement('P');
    const starsDiv = document.createElement('DIV');
    
    const roundResultText = document.createElement('P');
    
    const congratulationsButtons = document.createElement('DIV');
    const buttonBack = document.createElement('BUTTON');
    const buttonNext = document.createElement('BUTTON');

    congratulationsDiv.classList.add('congratulations');
    congratulationsText.textContent = `Congratulations !`;
    congratulationsText.classList.add('congratulations-text');
    starsDiv.classList.add('star-block');
    roundResultText.classList.add('current-round-result');
    congratulationsButtons.classList.add('congratulations-buttons');
    buttonBack.classList.add('back');
    buttonNext.classList.add('next-round');

 
    const roundCorrectAnswers = () => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        let correctAnswers = 0;
        sessionStorage.questionAnswers.forEach(item => {
            if (item === 'correct') correctAnswers++; 
        })
        return correctAnswers;
    }

    const correctAnswers = roundCorrectAnswers();
    roundResultText.textContent = `${correctAnswers} / ${TOTAL_QUESTIONS_IN_ROUND}`;

    main.append(congratulationsDiv);
        congratulationsDiv.append(congratulationsText);
        congratulationsDiv.append(starsDiv);

        for (let i = 0; i < STARS_COUNT; i++) {
            const star = document.createElement('DIV');
            star.classList.add('round-star');
            if (correctAnswers / 2 >= i + 1) star.classList.add('all-true');
            starsDiv.append(star);
        }

        congratulationsDiv.append(roundResultText);
        congratulationsDiv.append(congratulationsButtons);
        congratulationsButtons.append(buttonBack);
        congratulationsButtons.append(buttonNext);
}

export default congratulations;
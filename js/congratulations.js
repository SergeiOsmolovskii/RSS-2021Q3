import {TOTAL_QUESTIONS_IN_ROUND} from './variables.js';


const congratulations = () => {
    const congratulationsDiv = document.createElement('DIV');
    const congratulationsText = document.createElement('P');
    const starsDiv = document.createElement('DIV');
    const star = document.createElement('DIV');
    const congratulationsresultText = document.createElement('P');

    congratulationsText.textContent = `Congratulations !`;


    const roundResult = () => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        let correctAnswers = 0;
        sessionStorage.questionAnswers.forEach(item => {
            if (item === 'correct') correctAnswers++; 
        })
        return `${correctAnswers} / ${TOTAL_QUESTIONS_IN_ROUND}`;
    }
    roundResult()
    console.log(roundResult());

}

export default congratulations;
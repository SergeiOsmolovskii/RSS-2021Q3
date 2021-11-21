'use strict'

 import {TOTAL_CATEGORIS, TOTAL_ROUNDS, TOTAL_QUESTIONS_IN_ROUND} from './variables.js';

const main = document.querySelector('.main');
const scoreImg = document.querySelector('.score img');
const score = document.querySelector('.score');


let basickData = [];

for (let i = 0; i < TOTAL_ROUNDS * TOTAL_CATEGORIS; i ++) {
    basickData.push([null]);
}

if (localStorage.getItem('answers') === '' || localStorage.getItem('answers') === null) localStorage.setItem('answers', JSON.stringify(basickData));


export const removeMain = (newParam, oldParam) => {
    main.style.opacity = 0;
    score.style.opacity = 0;
    setTimeout(() => {
        fixHeader(newParam, oldParam);
        main.textContent = '';
    }, 1100);
}

export const fixHeader = (newParam, oldParam) => {
    const old = document.querySelector(`.${oldParam}`);
    if (old != null) {
        old.classList.remove(oldParam);
        scoreImg.setAttribute('src', `../assets/icons/${newParam}.svg`);
        scoreImg.setAttribute('alt', `${newParam}`);
        old.classList.add(`${newParam}`);
    };
}

const createCategory = (category, categoryGroup) => {
    
    const categoryItems = document.createElement('DIV');
    main.append(categoryItems);

    for (let i = 0; i < TOTAL_ROUNDS; i++) {

        const allAnswer = JSON.parse(localStorage.getItem('answers'))[i + categoryGroup * TOTAL_ROUNDS];
        const trueAnswers = () => allAnswer.reduce((accum, current) => {
            return current === 'correct' ? accum + 1 : accum;
        }, 0);

        const categoryItem = document.createElement('DIV');
        const categoryStat = document.createElement('DIV');
        const roundRating = document.createElement('DIV');
        const roundSpan = document.createElement('SPAN');
        const trueAnswerSpan = document.createElement('SPAN');
        const statSeparatorSpan = document.createElement('SPAN')
        const allQuestionsSpan = document.createElement('SPAN');
        const starImg = document.createElement('IMG');

        categoryItems.classList.add('category-items');
        categoryItem.classList.add('category-item');
        categoryItem.dataset.round = i + categoryGroup * TOTAL_ROUNDS;
        roundSpan.textContent = `${category} round ${i + 1}`;
        categoryStat.classList.add('category-stat');
        trueAnswerSpan.classList.add('true-answers');

        trueAnswerSpan.textContent = trueAnswers();
        if (trueAnswers() === TOTAL_QUESTIONS_IN_ROUND) starImg.classList.add('all-true');
        if (trueAnswers() === 0) categoryItem.classList.add('never-play');
        statSeparatorSpan.classList.add('stat-separator');
        statSeparatorSpan.textContent = ' / ';
        allQuestionsSpan.classList.add('all-questions');
        allQuestionsSpan.textContent = TOTAL_QUESTIONS_IN_ROUND;
        starImg.setAttribute('src', '../assets/icons/score.svg');
        starImg.setAttribute('alt', 'star');
        starImg.classList.add('roundRating');

        
            categoryItems.append(categoryItem);
                categoryItem.append(roundSpan);
                categoryItem.append(categoryStat);
                    categoryStat.append(roundRating);
                        roundRating.append(trueAnswerSpan);
                        roundRating.append(statSeparatorSpan);
                        roundRating.append(allQuestionsSpan);
                    categoryStat.append(starImg);
    }
}

export default createCategory;
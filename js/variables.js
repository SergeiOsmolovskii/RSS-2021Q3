export const TOTAL_CATEGORIS = 2;
export const TOTAL_ROUNDS = 12;
export const TOTAL_QUESTIONS_IN_ROUND = 10;
export const TOTAL_QUESTION_BUTTONS = 4;
export const sessionStorage = {
    category: null,
    categoryGroup: null,
    questionGroup: null,
    currentQuestion: 0,
    questionAnswers: [null, null, null, null, null, null, null, null, null, null]
};

export const main = document.querySelector('.main');
export const score = document.querySelector('.score');
export const header = document.querySelector('.header');

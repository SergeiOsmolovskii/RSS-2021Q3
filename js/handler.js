import createCategory, {fixHeader, removeMain} from './createCategory.js';
import {TOTAL_QUESTIONS_IN_ROUND, TOTAL_ROUNDS, sessionStorage as sessionData, main, score, header} from './variables.js';
import goHome from './home.js';
import generateQuestion, {isTrueAnswer} from './addQuiz.js';
import generateAnswerInfo from './generateAnswerInfo.js';
import saveSessionResult from './saveSessionResult.js';
import congratulations from './congratulations.js';
import audioPlay from './audio.js';


const settings = document.querySelector('.settings');
const settingsBlock = document.querySelector('.settings-block');

const handler = () => {
    settings.addEventListener('click', () => {
        settingsBlock.classList.toggle('hide-settings');
        audioPlay('click');
    });

    const createCategoriesRounds = (e) => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        if (e.target.classList.contains('category')) {
            const categoryName = e.target.dataset.name;
            const categoryGroup = e.target.dataset.group;
            sessionStorage.category = categoryName;
            sessionStorage.categoryGroup = categoryGroup;
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            removeMain('home', 'score');
            setTimeout(() => {
                createCategory(categoryName, categoryGroup);
                main.style.opacity = 1;
                score.style.opacity = 1;
            }, 1200);
            audioPlay('click');
            main.removeEventListener('click', createCategoriesRounds);
        }
    }
        
    const createQuestion = (e) => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        if (e.target.closest('.category-item')) {
            sessionStorage.questionGroup = e.target.closest('.category-item').dataset.round;
            const currentQuestion = sessionStorage.currentQuestion;
            const currentCategory = sessionStorage.category;
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            removeMain('home', 'home');
            setTimeout(() => {
                generateQuestion(currentQuestion, currentCategory); 
                main.style.opacity = 1;
                score.style.opacity = 1;
            }, 1200);
            audioPlay('click');
            main.removeEventListener('click', createQuestion);
        }
    }

    const checkAnswer = async(e) => {
        if (e.target.classList.contains('answer-button')) {
            let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
            const currentQuestionNumber = sessionStorage.currentQuestion - 1;
            const questionGroup = sessionStorage.questionGroup;

            isTrueAnswer(e.target, currentQuestionNumber);
            
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

            main.removeEventListener('click', checkAnswer);
        }
    }

    const nextQuestion = (e) => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        const currentQuestion = sessionStorage.currentQuestion;
        const currentCategory = sessionStorage.category;

        if (e.target.closest('.next-button')) {
            if (currentQuestion > TOTAL_QUESTIONS_IN_ROUND - 1) {
                main.style.opacity = 0;
                setTimeout(() => {
                    main.textContent = '';
                    main.style.opacity = 1;
                    congratulations();            
                }, 1200);
                saveSessionResult();
            } else {
                main.style.opacity = 0;
                setTimeout(() => {
                    main.textContent = '';
                    main.style.opacity = 1;
                    generateQuestion(currentQuestion, currentCategory);
                }, 1200)
            }
            audioPlay('click');
        }
        main.addEventListener('click', checkAnswer);
    }

    const removeSessionData = () => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        sessionStorage = sessionData;
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    }

    const addHomeIcon = (e) => {
        const homeImg = document.querySelector(`.home img`);
        const home = document.querySelector(`.home`);

        if (e.target === homeImg) {
            home.style.opacity = 0;
            main.style.opacity = 0;
            setTimeout(() => {
                main.textContent = '';
                goHome();
                fixHeader('score', 'home');
                main.style.opacity = 1;
                home.style.opacity = 1;
            }, 1200);
            audioPlay('click'); 
            removeSessionData();
            main.addEventListener('click', createCategoriesRounds);
            main.addEventListener('click', createQuestion);
            main.addEventListener('click', checkAnswer);
        }
    }

    const backToCategory = () => {
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        const categoryName = sessionStorage.category;
        const categoryGroup = sessionStorage.categoryGroup;

            main.style.opacity = 0;
            setTimeout(() => {
                main.textContent = '';                
                createCategory(categoryName, categoryGroup);
                main.style.opacity = 1;
            }, 1200);
            saveSessionResult();
            removeSessionData();
            audioPlay('click');
            main.addEventListener('click', createCategoriesRounds);
            main.addEventListener('click', createQuestion);
            main.addEventListener('click', checkAnswer);
    }

    main.addEventListener('click', createCategoriesRounds);
    main.addEventListener('click', createQuestion);
    main.addEventListener('click', checkAnswer);
    main.addEventListener('click', nextQuestion);
    header.addEventListener('click', addHomeIcon);
    
    main.addEventListener('click', (e) => {
        const back = document.querySelector('.main .back');
        if (e.target === back) {
            audioPlay('click');
            backToCategory();
        }
    });
}

export default handler;
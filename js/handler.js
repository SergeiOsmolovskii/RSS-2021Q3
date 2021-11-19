import createCategory, {fixHeader, removeMain} from './createCategory.js';
import {TOTAL_QUESTIONS_IN_ROUND, sessionStorage as sessionData, main, score, header} from './variables.js';
import goHome from './home.js';
import generateQuestion, {isTrueAnswer, generateAnswerInfo} from './addQuiz.js';
import saveSessionResult from './saveSessionResult.js';
import congratulations from './congratulations.js';

const progress = document.querySelectorAll('.progress');
const progressTime = document.querySelector('.progress-time');
const selectedGameTime = document.querySelector('.selected-time');
const settings = document.querySelector('.settings');
const settingsBlock = document.querySelector('.settings-block');

const handler = () => {
    
    settings.addEventListener('click', () => {
        settingsBlock.classList.toggle('hide-settings');
    })

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
            main.removeEventListener('click', createQuestion);
        }
    }

    const checkAnswer = async(e) => {
        if (e.target.classList.contains('answer-button')) {
            let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
            const currentQuestionNumber = sessionStorage.currentQuestion - 1;
            const questionGroup = sessionStorage.questionGroup;

            isTrueAnswer(e.target, currentQuestionNumber);
            
            await generateAnswerInfo(currentQuestionNumber, questionGroup);
            const roundResult = document.querySelector('.result-answer');
            console.log(roundResult);
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
        }
        main.addEventListener('click', checkAnswer);
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
                fixHeader('score', 'home')
                main.style.opacity = 1;
                home.style.opacity = 1;
            }, 1200);
            
            let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
            sessionStorage = sessionData;
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            
            main.addEventListener('click', createCategoriesRounds);
            main.addEventListener('click', createQuestion);
            main.addEventListener('click', checkAnswer);
        }
    }

    const backToCategory = (e) => {
        const back = document.querySelector('.main .back');
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        const categoryName = sessionStorage.category;
        const categoryGroup = sessionStorage.categoryGroup;

        if (e.target === back) {
        
            main.style.opacity = 0;
            setTimeout(() => {
                main.textContent = '';                
                createCategory(categoryName, categoryGroup);
                main.style.opacity = 1;
            }, 1200);
        }
    }

    const nextRound = (e) => {
        const setNextRound = document.querySelector('.main .next-round');
        let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        const questionGroup = sessionStorage.questionGroup;

        if (e.target === setNextRound) {
            
        
        }

    }


    main.addEventListener('click', createCategoriesRounds);
    main.addEventListener('click', createQuestion);
    main.addEventListener('click', checkAnswer);
    main.addEventListener('click', nextQuestion);
    header.addEventListener('click', addHomeIcon);
    
    main.addEventListener('click', backToCategory);

    progressTime.addEventListener('input', function () {
        const value = this.value;
        selectedGameTime.textContent = value;
        this.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${value * 3.33}%, #C4C4C4 ${value * 3.33}%, #C4C4C4)`;
    });

    progress.forEach(item => item.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${value}%, #C4C4C4 ${value}%, #C4C4C4)`;
    }));








}

export default handler;
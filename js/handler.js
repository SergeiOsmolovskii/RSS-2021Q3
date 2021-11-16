import createCategory, {fixHeader, removeMain} from './createCategory.js';
import goHome from './home.js';
import generateQuestion, {isTrueAnswer, generateAnswerInfo} from './addQuiz.js';

const main = document.querySelector('.main');
const score = document.querySelector('.score');
const header = document.querySelector('.header');

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
            console.log(sessionStorage);
            console.log(currentQuestion);
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            removeMain('home', 'home');
            setTimeout(() => {
                generateQuestion(currentQuestion); 
                main.style.opacity = 1;
                score.style.opacity = 1;
            }, 1200);
            main.removeEventListener('click', createQuestion);
        }
    }

    const checkAnswer = (e) => {
        if (e.target.classList.contains('answer-button')) {
            let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
            const currentQuestionNumber = sessionStorage.currentQuestion - 1;
            const questionGroup = sessionStorage.questionGroup;

            isTrueAnswer(e.target, currentQuestionNumber);
            
            generateAnswerInfo(currentQuestionNumber, questionGroup);
            main.removeEventListener('click', checkAnswer);
        }
    }



    main.addEventListener('click', createCategoriesRounds);
    main.addEventListener('click', createQuestion);
    main.addEventListener('click', checkAnswer);


    header.addEventListener('click', (e) => {
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
        }
    })

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
import {TOTAL_CATEGORIS, TOTAL_ROUNDS, TOTAL_QUESTIONS_IN_ROUND} from './variables.js';

const main = document.querySelector('.main');

const getData = async () => {
    const url = `./js/data.json`;
    const res = await fetch(url);  
    const data = await res.json();
    return data;
}

const getUniqueArtist = async () => {
    const uniqueArtist = new Set;
    const data = await getData();
    data.forEach(item => {
        uniqueArtist.add(item.author);
    })
    return uniqueArtist;
}



const generateQuestion = async (questionIndex) => {
/*     const a = await getData();
    console.log(await getUniqueArtist()) */

    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));

    const questionBlock = document.createElement('DIV');
    const question = document.createElement('P');
    const questionImg = document.createElement('DIV');
    const indicators = document.createElement('DIV');
    const answersButtons = document.createElement('DIV');

    questionBlock.classList.add('question-block');
    question.classList.add('question');
    question.textContent = 'Who is the author of this picture?';
    questionImg.classList.add('question-img');
    questionImg.setAttribute('url', '');
    indicators.classList.add('indicators');

    answersButtons.classList.add('answers-buttons');
    
    main.append(questionBlock);
        questionBlock.append(question);
        questionBlock.append(questionImg);
        questionBlock.append(indicators);
            for (let i = 0; i < TOTAL_QUESTIONS_IN_ROUND; i++) {
                const dot = document.createElement('DIV');
                dot.classList.add('dot');
                if (sessionStorage.questionAnswers[i] === 'correct') {
                    dot.classList.add('correct-dot');
                } 
                
                if (sessionStorage.questionAnswers[i] === 'wrong') {
                    dot.classList.add('wrong-dot');
                } 
                indicators.append(dot);
            }
        questionBlock.append(answersButtons);
            for (let i = 0; i < 4; i++) {
                const answersButton = document.createElement('BUTTON');
                answersButton.classList.add('answer-button');
                answersButton.textContent = i;
                answersButtons.append(answersButton);
            }
        




}

export default generateQuestion;
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

const setImage = async (number, item) => {  
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/SergeiOsmolovskii/image-data/master/img/${number}.jpg`;
    img.onload = () => {      
        item.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/image-data/master/img/${number}.jpg)`;
    }; 
}



const generateQuestion = async (questionIndex) => {

    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    sessionStorage.currentQuestion = questionIndex + 1;
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));

    const a = await getData();
    const uniqueArtist = await getUniqueArtist();
    console.log(a[5]);
    
    console.log(uniqueArtist);

    const questionBlock = document.createElement('DIV');
    const question = document.createElement('P');
    const questionImg = document.createElement('DIV');
    const indicators = document.createElement('DIV');
    const answersButtons = document.createElement('DIV');

    questionBlock.classList.add('question-block');
    question.classList.add('question');
    question.textContent = 'Who is the author of this picture?';
    questionImg.classList.add('question-img');


    const pictureIndex = questionIndex + (sessionStorage.questionGroup * TOTAL_QUESTIONS_IN_ROUND);
    await setImage(pictureIndex, questionImg)

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
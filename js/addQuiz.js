import {TOTAL_CATEGORIS, TOTAL_ROUNDS, TOTAL_QUESTIONS_IN_ROUND, TOTAL_QUESTION_BUTTONS} from './variables.js';

const main = document.querySelector('.main');

const getData = async () => {
    const url = `./js/data.json`;
    const res = await fetch(url);  
    const data = await res.json();
    return data;
}

const data = await getData();

const getUniqueArtist = async () => {
    const uniqueArtist = new Set;
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

const pushRandomItem = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


export const isTrueAnswer = (userAnswer, currentQuestion) => {
    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    const pictureIndex = currentQuestion + (sessionStorage.questionGroup * TOTAL_QUESTIONS_IN_ROUND);
    const questionData = data[pictureIndex];
    const author = questionData.author;
    if (userAnswer.textContent === author) {
        userAnswer.classList.add('correct');
        sessionStorage.questionAnswers[currentQuestion] = 'correct';
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    } else {
        const answerButton = document.querySelectorAll('.answer-button');
        answerButton.forEach(item => {
            if (item.textContent === author) {
                item.classList.add('correct');
            }
        })
        userAnswer.classList.add('wrong');
        sessionStorage.questionAnswers[currentQuestion] = 'wrong';
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    }
}


const generateQuestion = async (questionIndex) => {

    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    sessionStorage.currentQuestion = questionIndex + 1;
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));

    const uniqueArtist = await getUniqueArtist();
    const pictureIndex = questionIndex + (sessionStorage.questionGroup * TOTAL_QUESTIONS_IN_ROUND);
    const questionData = data[pictureIndex];

    const min = 1;
    const max = uniqueArtist.size;

    let authorArr = [];

    authorArr.push(questionData.author);
    
    for (let i = 0; i < TOTAL_QUESTION_BUTTONS - 1; i++) {
        if (authorArr.some(item => item === data[pushRandomItem(min, max)].author)) i--; 
        else authorArr.push(data[pushRandomItem(min, max)].author);
    }

    shuffle(authorArr);

    const questionBlock = document.createElement('DIV');
    const question = document.createElement('P');
    const questionImg = document.createElement('DIV');
    const indicators = document.createElement('DIV');
    const answersButtons = document.createElement('DIV');

    questionBlock.classList.add('question-block');
    question.classList.add('question');
    question.textContent = 'Who is the author of this picture?';
    questionImg.classList.add('question-img');

    await setImage(pictureIndex, questionImg);

    indicators.classList.add('indicators');
    answersButtons.classList.add('answers-buttons');
    
    main.append(questionBlock);
        questionBlock.append(question);
        questionBlock.append(questionImg);
        questionBlock.append(indicators);
            for (let i = 0; i < TOTAL_QUESTIONS_IN_ROUND; i++) {
                const dot = document.createElement('DIV');
                dot.classList.add('dot');
                if (sessionStorage.questionAnswers[i] === 'correct') dot.classList.add('correct-dot');
                if (sessionStorage.questionAnswers[i] === 'wrong') dot.classList.add('wrong-dot'); 

                indicators.append(dot);
            }
        questionBlock.append(answersButtons);
            for (let i = 0; i < TOTAL_QUESTION_BUTTONS; i++) {
                const answersButton = document.createElement('BUTTON');
                answersButton.classList.add('answer-button');
                answersButton.textContent = authorArr[i];
                answersButtons.append(answersButton);
            }
        




}

export const generateAnswerInfo = (currentQuestion, questionGroup) => {
    const questionData = data[currentQuestion + (questionGroup * TOTAL_QUESTIONS_IN_ROUND)];
    
    const resultAnswerDiv = document.createElement('DIV');
    const questionImg = document.createElement('DIV');
    const pictureName = document.createElement('P');
    const pictureYear = document.createElement('P');
    const artistInfo = document.createElement('P');
    const isCorrectImg = document.createElement('DIV');
    const buttonNext = document.createElement('BUTTON');
    
    
    resultAnswerDiv.classList.add('result-answer');
    questionImg.classList.add('question-img');
    pictureName.classList.add('picture-name');
    pictureYear.classList.add('picture-year');
    artistInfo.classList.add('artist-info');
    isCorrectImg.classList.add('is-correct');
    buttonNext.classList.add('next-button');
    
    main.append(resultAnswerDiv);

}

export default generateQuestion;
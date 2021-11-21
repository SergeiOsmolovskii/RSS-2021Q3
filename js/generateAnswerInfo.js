import {setImage, getData} from './addQuiz.js';
import {TOTAL_QUESTIONS_IN_ROUND, main} from './variables.js';


const generateAnswerInfo = async (currentQuestion, questionGroup, tryeAnswerNumber) => {
    const data = await getData();
    let questionIndex = currentQuestion + (questionGroup * TOTAL_QUESTIONS_IN_ROUND);
    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    
    if (sessionStorage.category === 'Pictures') {
        questionIndex = tryeAnswerNumber;
    }
    
    let questionData = data[questionIndex];
    
    const resultAnswerDiv = document.createElement('DIV');
    const questionImg = document.createElement('DIV');
    const pictureName = document.createElement('P');
    const pictureYear = document.createElement('P');
    const artistInfo = document.createElement('P');
    const isCorrectAnswer = document.createElement('DIV');
    const buttonNext = document.createElement('BUTTON');
    
    await setImage(questionIndex, questionImg);
    
    pictureName.textContent = questionData.name;
    pictureYear.textContent = questionData.year;
    artistInfo.textContent = questionData.author;
    buttonNext.textContent = 'Next';

    resultAnswerDiv.classList.add('result-answer');
    questionImg.classList.add('question-img');
    pictureName.classList.add('picture-name');
    pictureYear.classList.add('picture-year');
    artistInfo.classList.add('artist-info');
    isCorrectAnswer.classList.add('is-correct');
    buttonNext.classList.add('next-button');

    if (sessionStorage.questionAnswers[currentQuestion] === 'correct') {
        isCorrectAnswer.style.backgroundImage = `url(./assets/icons/correct_icon.svg)`;
    }
    if (sessionStorage.questionAnswers[currentQuestion] === 'wrong') {
        isCorrectAnswer.style.backgroundImage = `url(./assets/icons/wrong_icon.svg)`;
    }
    
    main.append(resultAnswerDiv);
        resultAnswerDiv.append(questionImg);
        resultAnswerDiv.append(pictureName);
        resultAnswerDiv.append(pictureYear);
        resultAnswerDiv.append(artistInfo);
        resultAnswerDiv.append(isCorrectAnswer);
        resultAnswerDiv.append(buttonNext);
}

export default generateAnswerInfo;
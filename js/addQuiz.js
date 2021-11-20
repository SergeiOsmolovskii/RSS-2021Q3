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


const generateQuestion = async (questionIndex, currentCategory) => {

    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    sessionStorage.currentQuestion = questionIndex + 1;
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));

    const createIndicators = (indicators) => {

        for (let i = 0; i < TOTAL_QUESTIONS_IN_ROUND; i++) {
            const dot = document.createElement('DIV');
            dot.classList.add('dot');
            if (sessionStorage.questionAnswers[i] === 'correct') dot.classList.add('correct-dot');
            if (sessionStorage.questionAnswers[i] === 'wrong') dot.classList.add('wrong-dot'); 

            indicators.append(dot);
        }

    }

    const generateArtistQuestion = async () => {
        const uniqueArtist = await getUniqueArtist();
        const pictureIndex = questionIndex + (sessionStorage.questionGroup * TOTAL_QUESTIONS_IN_ROUND);
        const questionData = data[pictureIndex];
        const uniqueArtistArr = [...uniqueArtist];
        const falseUniqueAnswers = uniqueArtistArr.filter(item => item != questionData.author);
        
        const min = 1;
        const max = falseUniqueAnswers.length;

        let authorArr = [];
        authorArr.push(questionData.author);
        
        for (let i = 0; i < TOTAL_QUESTION_BUTTONS - 1; i++) {
            const randomNum = pushRandomItem(min, max);
            authorArr.push(falseUniqueAnswers[randomNum]);
        }

        shuffle(authorArr);
    
        const questionBlock = document.createElement('DIV');
        const question = document.createElement('P');
        const questionImg = document.createElement('DIV');
        const answersButtons = document.createElement('DIV');
        const indicators = document.createElement('DIV');
        
        indicators.classList.add('indicators');
        questionBlock.classList.add('question-block');
        question.classList.add('question');
        question.textContent = 'Who is the author of this picture?';
        questionImg.classList.add('question-img');
    
        await setImage(pictureIndex, questionImg);
    
        answersButtons.classList.add('answers-buttons');
        
        main.append(questionBlock);
            questionBlock.append(question);
            questionBlock.append(questionImg);
            questionBlock.append(indicators);

            createIndicators(indicators);
            questionBlock.append(answersButtons);
                for (let i = 0; i < TOTAL_QUESTION_BUTTONS; i++) {
                    const answersButton = document.createElement('BUTTON');
                    answersButton.classList.add('answer-button');
                    answersButton.textContent = authorArr[i];
                    answersButtons.append(answersButton);
                }
    }

    const generatePictureQuestion = async () => {
        const questionBlock = document.createElement('DIV');
        const question = document.createElement('P');
        const answerButtons = document.createElement('DIV');
        const indicators = document.createElement('DIV');
        
        questionBlock.classList.add('question-block');
        question.classList.add('qestion');
        answerButtons.classList.add('answers-buttons');
        indicators.classList.add('indicators');       
        createIndicators(indicators);
 
        const pictureIndex = questionIndex + (sessionStorage.questionGroup * TOTAL_QUESTIONS_IN_ROUND);
        const questionData = data[pictureIndex];

        question.textContent = `Which of these pictures did ${data[pictureIndex].author} paint`;
        const currentAuthorData = data.filter(item => item.author === data[pictureIndex].author);
        const falseAuthorData = data.filter(item => item.author != data[pictureIndex].author);

        const minCurrentAuthorPicturesCount = 0;
        const maxCurrentAuthorPicturesCount = currentAuthorData.length;

        const minAnotherPicturesCount = 0;
        const maxAnotherPicturesCount = falseAuthorData.length;

        const randomCurrentAuthorPictureIndex = pushRandomItem(minCurrentAuthorPicturesCount, maxCurrentAuthorPicturesCount);
        const pictureArr = [];

        const randomCurrentAuthorPictureNumber = currentAuthorData[randomCurrentAuthorPictureIndex].imageNum;
        pictureArr.push(randomCurrentAuthorPictureNumber);

        for (let i = 0; i < TOTAL_QUESTION_BUTTONS - 1; i++) {
            const randomNum = pushRandomItem(minAnotherPicturesCount, maxAnotherPicturesCount);
            pictureArr.push(falseAuthorData[randomNum].imageNum);
        }

        shuffle(pictureArr);

        main.append(questionBlock);
            questionBlock.append(question);
            questionBlock.append(answerButtons);
            
            for (let i = 0; i < TOTAL_QUESTION_BUTTONS; i++) {
                const questionImg = document.createElement('DIV');
                questionImg.classList.add('question-img');
                await setImage(pictureArr[i], questionImg);
                answerButtons.append(questionImg);
            }

            questionBlock.append(indicators);

    
    }

    if (currentCategory === 'Artist') generateArtistQuestion();
    if (currentCategory === 'Pictures') generatePictureQuestion();
    




}

export const generateAnswerInfo = async (currentQuestion, questionGroup) => {
    const questionIndex = currentQuestion + (questionGroup * TOTAL_QUESTIONS_IN_ROUND);
    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    const questionData = data[questionIndex];
    
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
        isCorrectAnswer.style.backgroundImage = `url(./assets/icons/correct_icon.svg)`
    }
    if (sessionStorage.questionAnswers[currentQuestion] === 'wrong') {
        isCorrectAnswer.style.backgroundImage = `url(./assets/icons/wrong_icon.svg)`
    }

    
    main.append(resultAnswerDiv);
        resultAnswerDiv.append(questionImg);
        resultAnswerDiv.append(pictureName);
        resultAnswerDiv.append(pictureYear);
        resultAnswerDiv.append(artistInfo);
        resultAnswerDiv.append(isCorrectAnswer);
        resultAnswerDiv.append(buttonNext);

}

export default generateQuestion;
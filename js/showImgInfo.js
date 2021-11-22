import {setImage, getData} from './addQuiz.js';
import {main} from './variables.js';


const showImgInfo = async (questionIndex) => {
    const data = await getData();
    
    const questionData = data[questionIndex];
    
    const resultAnswerDiv = document.createElement('DIV');
    resultAnswerDiv.classList.add('result-answer');

    const questionImg = document.createElement('DIV');
    await setImage(questionIndex, questionImg);
    
    const pictureName = document.createElement('P');
    pictureName.textContent = questionData.name;
    
    const pictureYear = document.createElement('P');
    pictureYear.textContent = questionData.year;
    
    const artistInfo = document.createElement('P');
    artistInfo.textContent = questionData.author;

    const buttonBlock = document.createElement('DIV');
    buttonBlock.classList.add('statistick-button-block')
    
    const buttonBack = document.createElement('BUTTON');

    questionImg.classList.add('question-img');
    pictureName.classList.add('picture-name');
    pictureYear.classList.add('picture-year');
    artistInfo.classList.add('artist-info');
    buttonBack.classList.add('back-button');

    main.append(resultAnswerDiv);
    resultAnswerDiv.append(questionImg);
    resultAnswerDiv.append(pictureName);
    resultAnswerDiv.append(pictureYear);
    resultAnswerDiv.append(artistInfo);
    resultAnswerDiv.append(buttonBlock);
    buttonBlock.append(buttonBack);

}

export default showImgInfo;
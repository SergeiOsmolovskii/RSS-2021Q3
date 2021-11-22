import {TOTAL_QUESTIONS_IN_ROUND, TOTAL_ROUNDS, sessionStorage as sessionData, main, score, header} from './variables.js';

const createCurrentRoundStatistick = (data) => {

    const dataRound = data.dataset.round;
    const roundName = data.firstChild.textContent;

    const statisticInfo = document.createElement('DIV');
    statisticInfo.classList.add('statistic-info');

    const roundNumber = document.createElement('DIV');
    roundNumber.classList.add('round-number'); 

    const roundNumberSpan = document.createElement('SPAN');
    roundNumberSpan.textContent = roundName;

    const roundResult = document.createElement('DIV');
    roundResult.classList.add('round-result');

    const roundResultChildDiv = document.createElement('DIV');

    const trueAnswerSpan = document.createElement('SPAN');
    trueAnswerSpan.classList.add('true-answers');

    const statSeparatorSpan = document.createElement('SPAN');
    statSeparatorSpan.classList.add('separator');
    statSeparatorSpan.textContent = ' / ';

    const allQuestionsSpan = document.createElement('SPAN');
    allQuestionsSpan.classList.add('all-questions');
    allQuestionsSpan.textContent = TOTAL_QUESTIONS_IN_ROUND;

    const statisticBlock = document.createElement('DIV');
    statisticBlock.classList.add('statistic-block');

    const allAnswer = JSON.parse(localStorage.getItem('answers'))[dataRound];
    
    const trueAnswers = () => allAnswer.reduce((accum, current) => {
        return current === 'correct' ? accum + 1 : accum;
    }, 0);

    trueAnswerSpan.textContent = trueAnswers();


    const starImg = document.createElement('IMG');
    starImg.setAttribute('src', '../assets/icons/score.svg');
    starImg.setAttribute('alt', 'star');
    starImg.classList.add('roundRating');

    if (trueAnswers() === TOTAL_QUESTIONS_IN_ROUND) starImg.classList.add('all-true');

    console.log(allAnswer)

    main.append(statisticInfo);
        statisticInfo.append(roundNumber);
            roundNumber.append(roundNumberSpan);
        statisticInfo.append(roundResult);
        roundResult.append(roundResultChildDiv);
            roundResultChildDiv.append(trueAnswerSpan);
            roundResultChildDiv.append(statSeparatorSpan);
            roundResultChildDiv.append(allQuestionsSpan);
        roundResult.append(starImg);

        main.append(statisticBlock);
        
        const createRoundStatistick = () => {
            for (let i = 0; i < TOTAL_QUESTIONS_IN_ROUND; i++) {
                const statisticItem = document.createElement('DIV');
                statisticItem.classList.add('statistic-item');
                const number = (dataRound * TOTAL_QUESTIONS_IN_ROUND) + i;
                statisticItem.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/image-data/master/img/${number}.jpg)`;
                statisticItem.style.backgroundSize = 'cover';
                statisticItem.style.backgroundPosition = 'center';
                statisticItem.dataset.number = number;
                if (allAnswer[i] === 'correct') {
                    statisticItem.style.border = '8px solid green';
                }

                if (allAnswer[i] === 'wrong' || allAnswer[i] == null || allAnswer[i] === undefined) {
                    statisticItem.style.border = '8px solid red';
                    statisticItem.style.filter = 'grayscale(100%)';
                }
                statisticBlock.append(statisticItem);
            }
        }

    createRoundStatistick();

        
} 

export default createCurrentRoundStatistick;
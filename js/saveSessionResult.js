const saveSessionResult = () => {
    let sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    let answers = JSON.parse(localStorage.getItem('answers'));
    const questionGroup = sessionStorage.questionGroup;
    answers[questionGroup] = sessionStorage.questionAnswers;
    localStorage.setItem('answers', JSON.stringify(answers));
}

export default saveSessionResult;
import handler from './handler.js';

let sessionStorage = {
    category: null,
    questionGroup: null,
    currentQuestion: 0,
    questionAnswers: [null, null, null, null, null, null, null, null, null, null]
};



    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));

        /* const z = JSON.parse(localStorage.getItem('sessionStorage')).questionAnswers[2]; */
        /* console.log(z) */


handler();

//createCategory();
"use strict"

import {getRandom} from './flickrAPI.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let rotateDeg = 0;

export default async function getRandomQuote() {
    const randomQuot = getRandom(1, 100)
    let currentLangth = localStorage.getItem('selectedLanguage');

    if (currentLangth === 'ru') {
        const url = `./js/quotes_ru.json`;
        const res = await fetch(url);  
        const data = await res.json();
        quote.textContent = data[randomQuot].text;
        author.textContent = data[randomQuot].author; 

    } else {
        const url = `https://favqs.com/api/qotd`;
        const res = await fetch(url);  
        const data = await res.json(); 
        quote.textContent = `"${data.quote.body}"`;
        author.textContent = data.quote.author;
    }
}

changeQuote.addEventListener('click', () => {
    rotateDeg += 180;
    changeQuote.style.transform = `rotate(${rotateDeg}deg)`;
    changeQuote.style.transition = '1s';
    getRandomQuote();
})
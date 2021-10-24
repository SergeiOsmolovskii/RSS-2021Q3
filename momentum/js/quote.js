"use strict"

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let rotateDeg = 0;

export default async function getRandomQuote() {
    const url = `https://favqs.com/api/qotd`;
    const res = await fetch(url);  
    const data = await res.json(); 
    quote.textContent = `"${data.quote.body}"`;
    author.textContent = data.quote.author;
}

//export default async function getRandomQuote() {
//    const url = `https://api.forismatic.com/api/1.0/?method=getQuote&format=json&json=parseQuote?language=ru`;
//   const res = await fetch(url);  

//    const data = await res.json(); 
//    quote.textContent = `"${data.quote.body}"`;
//    author.textContent = data.quote.author;
//    console.log(data)
//}
getRandomQuote();

changeQuote.addEventListener('click', () => {
    rotateDeg += 180;
    changeQuote.style.transform = `rotate(${rotateDeg}deg)`;
    changeQuote.style.transition = '1s';
    getRandomQuote();
})
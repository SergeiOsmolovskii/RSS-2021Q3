"use strict"
import translation from './language.js';

const time = document.querySelector('.time');
const currentVisibleDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
/* let lang = localStorage.getItem('selectedLanguage');
let langSetting = translation[lang]; */

export let currentTimeOfDay = '';

export function showTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    time.textContent = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    if (hours >= 6 && hours < 12 ) currentTimeOfDay = 'morning';
    if (hours >= 12 && hours < 18 ) currentTimeOfDay = 'afternoon';
    if (hours >= 18 && hours < 24 ) currentTimeOfDay = 'evening';
    if (hours >= 0 && hours < 6 ) currentTimeOfDay = 'night';

    userGreeting();
    showDate();
    setTimeout(showTime, 1000); 
    return currentTimeOfDay;
  }

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', weekday:'long', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString(`${localStorage.getItem('selectedLanguage')}`, options);
    currentVisibleDate.textContent = currentDate;
}

export function userGreeting() {
    let lang = localStorage.getItem('selectedLanguage');
    let langSetting = translation[lang];
    greeting.textContent = langSetting.greeting[currentTimeOfDay];
}
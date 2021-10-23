import {showTime} from './time.js';
import getWeather from './wether.js';
import settings from './settings.js';
import getRandomQuote from './quote.js';
import {playAudio} from './audio.js';
import {addBackgroundImageFromGitHub, minSliderIndex, maxSliderIndex} from './slider.js';
import flickr from './flickrAPI.js';
import unsplash from './unsplashAPI.js';

settings();

const playBtn = document.querySelector('.play');
const city = document.querySelector('.city');
const userName = document.querySelector('.name');
let currentTimeOfDay = showTime();

if (localStorage.getItem('name')) userName.value = localStorage.getItem('name');
if (localStorage.getItem('city')) city.value = localStorage.getItem('city');
if (localStorage.getItem('selectedTag') === '' || localStorage.getItem('selectedTag') === null) localStorage.setItem('selectedTag', currentTimeOfDay);

let tag = localStorage.getItem('selectedTag');

/* Time */

showTime();

/* Slider */

if (localStorage.getItem('selectedPictureAPI') === 'Unsplash') {
    unsplash(tag);
} else if (localStorage.getItem('selectedPictureAPI') === 'Flickr') {
    flickr(tag);
} else addBackgroundImageFromGitHub(minSliderIndex, maxSliderIndex);

/* Wether */

if (localStorage.getItem('city') === '' || localStorage.getItem('city') === null) {
    getWeather('Minsk');
    city.value = 'Minsk';
} else getWeather(city.value);

/* Random quote */

getRandomQuote();

/* Audio  */

playBtn.addEventListener('click', playAudio);

city.addEventListener ( 'change', e => {
    city.textContent = e.target.value;
    localStorage.setItem('city', city.value);
    getWeather(city.value);
})

userName.addEventListener ( 'change', e => {
    userName.textContent = e.target.value;
    localStorage.setItem('name', userName.value);
})
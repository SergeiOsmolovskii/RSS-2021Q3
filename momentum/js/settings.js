"use strict"
import flickr from './flickrAPI.js';
import unsplash from './unsplashAPI.js';
import {addBackgroundImageFromGitHub, minSliderIndex, maxSliderIndex} from './slider.js';
import getWeather from './wether.js';
import {userGreeting} from './time.js';
import translation, {changeLanguage} from './language.js';


const settingsButton = document.querySelector('.settings');
const settingsBlock = document.querySelector('.settings-block');
const selectedLanguage = document.getElementById('select-language');
const selectedTime = document.getElementById('select-time');
const selectedDate = document.getElementById('select-date');
const selectedGreeting = document.getElementById('select-greeting');
const selectedQuote = document.getElementById('select-quote');
const selectedWeather = document.getElementById('select-weather');
const selectedAudio = document.getElementById('select-audio');
const selectedToDoList = document.getElementById('select-to-do-list');
const toDoListButton = document.getElementById('to-do-list-button');

const selectedPictureAPI = document.getElementsByName('picture');
const pictureTags = document.getElementById('tag');
const city = document.querySelector('.city');
let lang = localStorage.getItem('selectedLanguage');
let langSetting = translation[lang];


let tag = localStorage.getItem('selectedTag');

if (localStorage.getItem('selectedTime')) selectedTime.checked = JSON.parse(localStorage.getItem('selectedTime'));
if (localStorage.getItem('selectedDate')) selectedDate.checked = JSON.parse(localStorage.getItem('selectedDate'));
if (localStorage.getItem('selectedGreeting')) selectedGreeting.checked = JSON.parse(localStorage.getItem('selectedGreeting'));
if (localStorage.getItem('selectedQuote')) selectedQuote.checked = JSON.parse(localStorage.getItem('selectedQuote'));
if (localStorage.getItem('selectedWeather')) selectedWeather.checked = JSON.parse(localStorage.getItem('selectedWeather'));
if (localStorage.getItem('selectedAudio')) selectedAudio.checked = JSON.parse(localStorage.getItem('selectedAudio'));
if (localStorage.getItem('selectedToDoList')) selectedToDoList.checked = JSON.parse(localStorage.getItem('selectedToDoList'));
localStorage.getItem('selectedLanguage') === 'ru' ? selectedLanguage.checked = true : false;

if (localStorage.getItem('selectedTime') == 'false') setBlock('Time', selectedTime, '.time');
if (localStorage.getItem('selectedDate') == 'false') setBlock('Date', selectedTime, '.date');
if (localStorage.getItem('selectedGreeting') == 'false') setBlock('Greeting', selectedGreeting, '.greeting-container');
if (localStorage.getItem('selectedQuote') == 'false') setBlock('Quote', selectedQuote, '.quote-day');
if (localStorage.getItem('selectedWeather') == 'false') setBlock('Weather', selectedWeather, '.weather');
if (localStorage.getItem('selectedAudio') == 'false') setBlock('Audio', selectedAudio, '.player');
if (localStorage.getItem('selectedToDoList') == 'false') setBlock('ToDoList', selectedToDoList, '.to-do-list-button');

    function setTags() {
        localStorage.setItem('selectedTag', this.value);
    } 

    function setBlock(blockParam, blockName, selector) {
        localStorage.setItem(`selected${blockParam}`, blockName.checked);
        hideBlock(selector);
    } 

    function hideBlock(selector) {
        const blockName = document.querySelector(`${selector}`);
        blockName.classList.toggle('non-active-block');
    }

export default function settings() {

    function openSettings(e) {
        if (e.target === settingsButton) settingsBlock.classList.toggle('setting-active');
    }

    function selectedAPI() {
        localStorage.setItem('selectedPictureAPI', this.value);
        if (localStorage.getItem('selectedPictureAPI') === 'Unsplash') {
            unsplash(tag);
        }
        else if (localStorage.getItem('selectedPictureAPI') === 'Flickr') {
            flickr(tag);
        } else addBackgroundImageFromGitHub(minSliderIndex, maxSliderIndex);
    }

    function selectPictureAPI() {
        selectedPictureAPI.forEach(item => {
          item.onchange = selectedAPI;
          if (localStorage.getItem('selectedPictureAPI') === item.value) item.checked = true;
        });
    }

    function selectLanguage() {
       
        if (selectedLanguage.checked === false) localStorage.setItem('selectedLanguage', 'eng');
        else localStorage.setItem('selectedLanguage', 'ru');
        
        if (localStorage.getItem('city') === '' || localStorage.getItem('city') === null) {
            getWeather('Minsk');
            city.value = 'Minsk';
        } else getWeather(city.value);

        userGreeting();
        changeLanguage();
    }
        
    function currentLanguage() {
        selectedLanguage.onchange = selectLanguage;
    }

    currentLanguage();
    selectPictureAPI();

    pictureTags.addEventListener('change', setTags);
    settingsButton.addEventListener('click', openSettings);
    selectedTime.addEventListener('change', () => setBlock('Time', selectedTime, '.time'));
    selectedDate.addEventListener('change', () => setBlock('Date', selectedDate, '.date'));
    selectedGreeting.addEventListener('change', () => setBlock('Greeting', selectedGreeting, '.greeting-container'));
    selectedQuote.addEventListener('change', () => setBlock('Quote', selectedQuote, '.quote-day'));
    selectedWeather.addEventListener('change', () => setBlock('Weather', selectedWeather, '.weather'));
    selectedAudio.addEventListener('change', () => setBlock('Audio', selectedAudio, '.player'));
    selectedToDoList.addEventListener('change', () => setBlock('ToDoList', selectedToDoList, '.to-do-list-button'));
}
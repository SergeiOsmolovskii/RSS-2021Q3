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


if (localStorage.getItem('selectedTime')) selectedTime.checked = JSON.parse(localStorage.getItem('selectedTime'));
if (localStorage.getItem('selectedDate')) selectedDate.checked = JSON.parse(localStorage.getItem('selectedDate'));

if (localStorage.getItem('selectedDate')) selectedDate.checked = JSON.parse(localStorage.getItem('selectedDate'));
if (localStorage.getItem('selectedGreeting')) selectedGreeting.checked = JSON.parse(localStorage.getItem('selectedGreeting'));
if (localStorage.getItem('selectedQuote')) selectedQuote.checked = JSON.parse(localStorage.getItem('selectedQuote'));
if (localStorage.getItem('selectedWeather')) selectedWeather.checked = JSON.parse(localStorage.getItem('selectedWeather'));
if (localStorage.getItem('selectedAudio')) selectedAudio.checked = JSON.parse(localStorage.getItem('selectedAudio'));
if (localStorage.getItem('selectedToDoList')) selectedToDoList.checked = JSON.parse(localStorage.getItem('selectedToDoList'));




/*
localStorage.setItem('selectedTime', selectedTime.checked);
localStorage.setItem('selectedDate', selectedDate.checked);
localStorage.setItem('selectedGreeting', selectedGreeting.checked);
localStorage.setItem('selectedQuote', selectedQuote.checked);
localStorage.setItem('selectedWeather', selectedWeather.checked);
localStorage.setItem('selectedAudio', selectedAudio.checked);
localStorage.setItem('selectedToDoList', selectedToDoList.checked); */


let state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
  }

if (localStorage.getItem('city')) city.value = localStorage.getItem('city');




export default function settings() {

    function openSettings() {
        settingsBlock.classList.toggle('setting-active');
    }

    function hideBlock(selector) {
        selector.classList.toggle('non-active-block');
    }
    
    function setBlock(blockParam, blockName) {
        localStorage.setItem(`selected${blockParam}`, blockName.checked);
    } 

    settingsButton.addEventListener('click', openSettings);

selectedTime.addEventListener('change', () => setBlock('Time',selectedTime));
selectedDate.addEventListener('change', () => setBlock('Date',selectedDate));
selectedGreeting.addEventListener('change', () => setBlock('Greeting',selectedGreeting));
selectedQuote.addEventListener('change', () => setBlock('Quote',selectedQuote));
selectedWeather.addEventListener('change', () => setBlock('Weather',selectedWeather));
selectedAudio.addEventListener('change', () => setBlock('Audio',selectedAudio));
selectedToDoList.addEventListener('change', () => setBlock('ToDoList',selectedToDoList));

}
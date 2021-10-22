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
const selectedPictureAPI = document.getElementsByName('picture');
const pictureTags = document.getElementById('tag');

if (localStorage.getItem('selectedTag') === '') localStorage.setItem('selectedTag', 'nature');



if (localStorage.getItem('selectedTime')) selectedTime.checked = JSON.parse(localStorage.getItem('selectedTime'));
if (localStorage.getItem('selectedDate')) selectedDate.checked = JSON.parse(localStorage.getItem('selectedDate'));
if (localStorage.getItem('selectedGreeting')) selectedGreeting.checked = JSON.parse(localStorage.getItem('selectedGreeting'));
if (localStorage.getItem('selectedQuote')) selectedQuote.checked = JSON.parse(localStorage.getItem('selectedQuote'));
if (localStorage.getItem('selectedWeather')) selectedWeather.checked = JSON.parse(localStorage.getItem('selectedWeather'));
if (localStorage.getItem('selectedAudio')) selectedAudio.checked = JSON.parse(localStorage.getItem('selectedAudio'));
if (localStorage.getItem('selectedToDoList')) selectedToDoList.checked = JSON.parse(localStorage.getItem('selectedToDoList'));
//if (localStorage.getItem('selectedToDoList')) selectedToDoList.checked = JSON.parse(localStorage.getItem('selectedToDoList'));
//if (localStorage.getItem('selectedPictureAPI')) 

if (localStorage.getItem('selectedTime') == 'false') setBlock('Time', selectedTime, '.time');
if (localStorage.getItem('selectedDate') == 'false') setBlock('Date', selectedTime, '.date');
if (localStorage.getItem('selectedGreeting') == 'false') setBlock('Date', selectedGreeting, '.greeting-container');
if (localStorage.getItem('selectedQuote') == 'false') setBlock('Date', selectedQuote, '.quote-day');
if (localStorage.getItem('selectedWeather') == 'false') setBlock('Date', selectedWeather, '.weather');
if (localStorage.getItem('selectedAudio') == 'false') setBlock('Date', selectedAudio, '.player');
//if (localStorage.getItem('selectedToDoList') == 'false') setBlock('Date', selectedToDoList, '.toDoList');


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
    }

    function selectPictureAPI() {
        selectedPictureAPI.forEach(item => {
          item.onchange = selectedAPI;
          if (localStorage.getItem('selectedPictureAPI') === item.value) item.checked = true;
        });
      }

      selectPictureAPI();

      pictureTags.addEventListener('change', setTags);

    settingsButton.addEventListener('click', openSettings);
    selectedTime.addEventListener('change', () => setBlock('Time', selectedTime, '.time'));
    selectedDate.addEventListener('change', () => setBlock('Date', selectedDate, '.date'));
    selectedGreeting.addEventListener('change', () => setBlock('Greeting', selectedGreeting, '.greeting-container'));
    selectedQuote.addEventListener('change', () => setBlock('Quote', selectedQuote, '.quote-day'));
    selectedWeather.addEventListener('change', () => setBlock('Weather', selectedWeather, '.weather'));
    selectedAudio.addEventListener('change', () => setBlock('Audio', selectedAudio, '.player'));
    //selectedToDoList.addEventListener('change', () => setBlock('ToDoList', selectedToDoList));
}
const translation = {
    ru: {
        greeting: {
            morning: 'Доброе утро',
            afternoon: 'Добрый день',
            evening: 'Добрый вечер',
            night: 'Доброй ночи'
        },
        namePlaceholder: '[Введите имя]',
        cityPlaceholder: '[Введите город]',
        wind: 'Скорость ветра',
        humidity: 'Влажность',
        windMeasure: 'м/с',
        toDoInput: '[Введите дело]',
        addJob: '+',
        toDo: 'Список дел',
        settings: {
            time: 'Время',
            date: 'Дата',
            greeting: 'Приветствие',
            quote: 'Цитата',
            weather: 'Погода',
            audio: 'Аудио',
            toDoList: 'Список дел',
            photos: 'Изображения',
            tags: 'Тэги'
        }
    },
    eng: {
        greeting: {
            morning: 'Good morning',
            afternoon: 'Good afternoon',
            evening: 'Good evening',
            night: 'Good night'
        },
        namePlaceholder: '[Enter name]',
        cityPlaceholder: '[Enter city]',
        wind: 'Wind speed',
        humidity: 'Humidity',
        windMeasure: 'm/s',
        toDoInput: '[Add a new job]',
        addJob: 'Add',
        toDo: 'To-do list',
        settings: {
            time: 'Time',
            date: 'Date',
            greeting: 'Greeting',
            quote: 'Quote',
            weather: 'Weather',
            audio: 'Audio',
            toDoList: 'To-Do list',
            photos: 'Photos',
            tags: 'Tags'
        }
    }
}

export function changeLanguage() {
    let lang = localStorage.getItem('selectedLanguage');
    let langSetting = translation[lang];

    for (let key in langSetting.settings) {
        let item = document.getElementById(key);
        if (item != null) {
            item.textContent = langSetting.settings[key]; 
        }
    }
    document.getElementById('namePlaceholder').setAttribute('placeholder', langSetting.namePlaceholder); 
    document.getElementById('cityPlaceholder').setAttribute('placeholder', langSetting.cityPlaceholder); 
    document.getElementById('toDoInput').setAttribute('placeholder', langSetting.toDoInput); 
    document.getElementById('add-job').textContent = langSetting.addJob; 
    document.getElementById('to-do').textContent = langSetting.toDo; 




}

export default translation;
import handler from './handler.js';
import {sessionStorage} from './variables.js';
import setSettings from './settings.js';

localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));



setSettings();
handler();

//createCategory();
import './css/main.css';
import './components/settings/sort-settings';
import './components/range-filter/range-filter';
import { data } from './components/settings/constant';
import { initialSettings } from './components/settings/start-settings'; 
import { renderSettings } from './components/settings/sort-settings';

initialSettings();

const createCards = async () => {
  
  /* fix it */

  // const sortParam = JSON.parse(localStorage.getItem('settings'));
  // const setP = new Set(sortParam.colors); 
  // console.log(sortParam.colors);
  // console.log(data.filter(item => setP.has(item.color)));
  //console.log(JSON.parse(localStorage.getItem('settings')))
  
  //const card1 = new Card ("Большой шар с рисунком", 1, 2 , 1990, "шар", "красный", "большой", false);
}

await renderSettings();
await createCards()

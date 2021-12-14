import './css/main.css';
import './components/settings/sort-settings';
import './components/range-filter/range-filter';
import { data } from './components/settings/constant';
import { initialSettings } from './components/settings/start-settings'; 
import { renderSettings } from './components/settings/sort-settings';
import { Card } from './components/card/card';
import { sortSettings } from './components/sort-data'


initialSettings();
export const createCards = async () => {

  const data = await sortSettings();

  for (let i = 0; i < data.length; i++) {
    const card = new Card (data[i].name, data[i].num, data[i].count , data[i].year, data[i].shape, data[i].color, data[i].size, data[i].favorite);
    card.addCard();
  }

}



await renderSettings();
await createCards()
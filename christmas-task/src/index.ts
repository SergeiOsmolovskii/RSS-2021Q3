import './css/main.css';
import './components/settings/sort-settings';
import './components/range-filter/range-filter';
import { initialSettings } from './components/settings/start-settings'; 
import { Card } from './components/card/card';
import { sortSettings } from './components/sort-data'
import { startGame } from './components/app/start-game';
import { createElement } from './components/settings/sort-settings';
import { creatTreeBlock } from './components/settings/create-tree-block';
const startButton = document.querySelector('.start-game-button') as HTMLElement;
// creatTreeBlock()
export const createCards = async () => {
  initialSettings();
  const toysCadrContainer = document.querySelector('.toys-cadr-container') as HTMLElement;
  const favoriteCardsCount = document.querySelector('.favorite-cards-count');
  let favoriteCards = JSON.parse(localStorage.getItem('favoriteToys'));
  const data = await sortSettings();

  if (data.length === 0) {
    const matchesError = createElement(['matches-error'], 'p', toysCadrContainer);
    matchesError.textContent = 'Sorry, no matches found.'
  }

  for (let i = 0; i < data.length; i++) {
    const card = new Card (data[i].name, data[i].num, data[i].count , data[i].year, data[i].shape, data[i].color, data[i].size, data[i].favorite);
    card.addCard();
  }

  favoriteCardsCount.textContent = favoriteCards.length;
}

console.log(`

Добрый день, если есть какие-нибудь вопросы или спорные моменты, пожалуйста свяжитесь со мной. Заранее спасибо, хорошего дня.
На данный момент не все пункты выполнены, к четвергу будут добавлены.

Итог: 110/200.

Вёрстка страниц приложения и навигация между ними +30
Меню с настройками +50

в слотах находятся игрушки, которые были добавлены в избранное на странице с игрушками +10
если в избранное не была добавлена ни одна игрушка, в слотах отображаются первые 20 игрушек коллекции исходных данных +10
игрушки из слотов с игрушками можно перетянуть на ёлку используя drag and drop +10

`);

startButton.addEventListener('click', startGame, {once: true});
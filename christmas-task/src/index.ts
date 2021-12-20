import './css/main.css';
import './components/settings/sort-settings';
import './components/range-filter/range-filter';
import { initialSettings } from './components/settings/start-settings'; 
import { Card } from './components/card/card';
import { sortSettings } from './components/sort-data'
import { startGame } from './components/app/start-game';
import { createElement } from './components/settings/sort-settings';

const startButton = document.querySelector('.start-game-button') as HTMLElement;

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

startButton.addEventListener('click', startGame, {once: true});
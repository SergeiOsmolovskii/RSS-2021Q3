import { createGarageSettingBlock } from "./components/garage";
import { createCarsSection } from "./components/garage";
import { getCars } from "./api";
import { getWinners } from "./api";
import { store } from "./components/store";
import { createCarBlock } from "./components/garage";
import { createCar } from "./components/garage";
import { getCar } from "./api";
import { createPagitation } from "./components/garage";
import { createWinnersSwitchButtons } from "./components/winnres";
import { createWinnersTable } from "./components/winnres";
import { createWinnersSection } from "./components/winnres";
import { createWinners } from "./components/winnres";

export const renderGaragePage = async () => {  
  const cars = await getCars(store.page);
  const garageSettingsBlock = document.createRange().createContextualFragment(createGarageSettingBlock());
  const garagePaginationBlock = document.createRange().createContextualFragment(createPagitation('garage'));
  const garageSection = document.querySelector('.garage-section');

  const garageHeaders = document.createRange().createContextualFragment(await createCarsSection(Number(cars.count), store.page));
  
  const carsSection = document.createElement('section');
  carsSection.classList.add('cars-section');
  
  if (garageSection !== null) {
    garageSection.append(garageSettingsBlock);
    garageSection.append(carsSection);
    garageSection.append(garagePaginationBlock);
  }
  
  if (carsSection !== null) {
    carsSection.append(garageHeaders);
    for (let i = 0; i < Number(cars.count); i++) {
      const carsBlock = document.createRange().createContextualFragment(await createCarBlock(cars.item[i].name, cars.item[i].color, cars.item[i].id));
      carsSection.append(carsBlock);
    }
  }
}

console.log(await getCar(2));

export const renderWinnersPage = async () => {
  const winners = await getWinners(store.winnersPage, store.winnersSortType, store.winnersOrder);

  const winnersSection = document.querySelector('.winners-section');

  const winnersSwitchButtonsBlock = document.createRange().createContextualFragment(createWinnersSwitchButtons());
  const winnersSectionBlock = document.createRange().createContextualFragment(await createWinnersSection(Number(winners.count), store.winnersPage));
  const winnersTable = document.createRange().createContextualFragment(createWinnersTable());
  const winnersPagination = createPagitation('winners');
  const winnersPaginationBlock = document.createRange().createContextualFragment(winnersPagination);

  if (winnersSection !== null) {
    winnersSection?.append(winnersSwitchButtonsBlock);
    winnersSection?.append(winnersSectionBlock);
    winnersSection?.append(winnersTable);
    winnersSection?.append(winnersPaginationBlock);
  }

  const tabelHead = document.querySelector('.winners-table__body');
  for (let i = 0; i < Number(winners.count); i++) {
    const currentCar = await getCar(winners.winners[i].id);
    const winnerTable = document.createRange().createContextualFragment(
        createWinners(i + 1, currentCar[0].name, currentCar[0].color, Number(winners.winners[i].wins), winners.winners[i].time)
      );
      console.log(winnerTable)
    tabelHead?.insertAdjacentHTML('afterbegin', createWinners(i + 1, currentCar[0].name, currentCar[0].color, Number(winners.winners[i].wins), winners.winners[i].time));
  }
}
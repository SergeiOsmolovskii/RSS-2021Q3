import { createGarageSettingBlock } from "./components/garage";
import { createCarsSection } from "./components/garage";
import { getCars } from "./api";
import { store } from "./components/store";
import { createCarBlock } from "./components/garage";
import { createPagitation } from "./components/garage";
import { createWinnersSwitchButtons } from "./components/winnres";
import { createWinnersTable } from "./components/winnres";
import { createWinnersSection } from "./components/winnres";

const cars = await getCars(store.page);

export const renderGaragePage = async () => {
  
  const garageSettings = createGarageSettingBlock();
  const garageSettingsBlock = document.createRange().createContextualFragment(garageSettings);
  const garagePagination = createPagitation('garage');
  const garagePaginationBlock = document.createRange().createContextualFragment(garagePagination);
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

export const renderWinnersPage = async () => {
  const winnersSection = document.querySelector('.winners-section');

  const winnersSwitchButtonsBlock = document.createRange().createContextualFragment(createWinnersSwitchButtons());
  const winnersSectionBlock = document.createRange().createContextualFragment(await createWinnersSection(1, 1));
  const winnersTable = document.createRange().createContextualFragment(createWinnersTable());
  const winnersPagination = createPagitation('winners');
  const winnersPaginationBlock = document.createRange().createContextualFragment(winnersPagination);


  if (winnersSection !== null) {
    winnersSection?.append(winnersSwitchButtonsBlock);
    winnersSection?.append(winnersSectionBlock);
    winnersSection?.append(winnersTable);
    winnersSection?.append(winnersPaginationBlock);
  }
}
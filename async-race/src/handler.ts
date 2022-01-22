import { addCar, updateCar, removeCar, removeWinner, getAllWinners, stopEngine } from "./api";
import { ICarBody } from "./components/interfaces";
import { store } from "./components/store";
import { updateGarage, updateWinnersTable } from "./renderPage";
import { generateRandomCars } from "./secondaryFunctions";
import { CARS_TO_GENERATE } from "./constants";
import { startDriving, stopDriving, backCar } from "./animation";
export const handler = async () => {
  const garageSection = document.querySelector('.garage-section');
  const winnersSection = document.querySelector('.winners-section');
  
  const goToGarage = (e: Event) => {
    if ((e.target as Element ).classList.contains('switch-buttons__garage')) {
      garageSection?.classList.remove('display--none');
      winnersSection?.classList.add('display--none');
    }
  }

  const goToWinners = (e: Event) => {
    if ((e.target as Element ).classList.contains('switch-buttons__winners')) {
      garageSection?.classList.add('display--none');
      winnersSection?.classList.remove('display--none');
    }
  }

  const toGarage = document.querySelectorAll('.switch-buttons__garage');
  const toWinners = document.querySelectorAll('.switch-buttons__winners');

  toGarage.forEach(item => {
    item.addEventListener('click', goToGarage);
  });

  toWinners.forEach(item => {
    item.addEventListener('click', goToWinners);
  });

  const createCar = async (e: Event) => {
    e.preventDefault();
    const carName = document.getElementById('add-name') as HTMLInputElement;
    const carColor = document.getElementById('add-color') as HTMLInputElement;
    const body: ICarBody = {
      name: carName.value,
      color: carColor.value
    };
    if (carName.value && carColor.value) {
      await addCar(body);
      await updateGarage();
    }
  }

  const createCarButton = document.getElementById('create-car');
  createCarButton?.addEventListener('click', createCar);

  const nextCarPage = async (e: Event) => {
    if ((e.target as HTMLTemplateElement).closest('.garage__next')) {
      store.page++;
      await updateGarage();
    }
  }

  const prevCarPage = async (e: Event) => {
    if ((e.target as HTMLTemplateElement).closest('.garage__prev')) {
      store.page--;
      await updateGarage();
    }
  }

  const nextWinnersPage = async (e: Event) => {
    if ((e.target as HTMLTemplateElement).closest('.winners__next')) {
      store.winnersPage++;
      /* update winners */
    }
  }

  const prevWinnersPage = async (e: Event) => {
    if ((e.target as HTMLTemplateElement).closest('.winners__prev')) {
      store.winnersPage--;
      /* update winners */
    }
  }

  const removeCurrentCar = async (e: Event) => {
    const currentButton = (e.target as HTMLTemplateElement).closest('.car-remove');
    if (currentButton) {
      const winnersTableBody = document.querySelector('.winners-table__body') as HTMLElement;
      const allWinnewrs = await getAllWinners();
      const currentCarID = currentButton.closest('.cars-block')?.id; 
      allWinnewrs.winners.includes(Number(currentCarID));
      removeCar(Number(currentCarID));
      if (Number(currentCarID)) {
        removeWinner(Number(currentCarID));
      }
      updateGarage();
      winnersTableBody.textContent = '';
      updateWinnersTable();
    }
  }

  const updateCurrentCar = async (e: Event) => {
    e.preventDefault();
    if (store.selectedCarID !== 0) {
      const newCarName = document.getElementById('update-name') as HTMLInputElement;
      const newCarColor = document.getElementById('update-color') as HTMLInputElement;
      const body: ICarBody = {
        name: newCarName.value,
        color: newCarColor.value
      };
      
      if (newCarName.value && newCarColor.value) {
        const tabelHead = document.querySelector('.winners-table__body') as HTMLElement;
        await updateCar(store.selectedCarID, body);
        await updateGarage();
        tabelHead.textContent = '';
        await updateWinnersTable();
        store.selectedCarID = 0;
      }
    }
  }

  const updateCurrentCarID = async (e: Event) => {
    const selectedCar = (e.target as HTMLTemplateElement).closest('.car-select');
    if (selectedCar) {
      const currentCarID = selectedCar.closest('.cars-block')?.id;
      store.selectedCarID = Number(currentCarID);
    }
  }

  const startAnimation = async (e: Event) => {
    const startButton = (e.target as HTMLTemplateElement).closest('.car-controls__start');
    if (startButton) {
      const currentCarID = startButton.closest('.cars-block')?.id;
      await startDriving(Number(currentCarID));
    }
  } 

  const stopAnimation = async (e:Event) => {
    const stopButton = (e.target as HTMLTemplateElement).closest('.car-controls__back');
    if (stopButton) {
      const currentCarID = stopButton.closest('.cars-block')?.id;
      await stopEngine(Number(currentCarID));
      await stopDriving(Number(currentCarID));
      await backCar(Number(currentCarID));
    }
  }

  garageSection?.addEventListener('click', nextCarPage);
  garageSection?.addEventListener('click', prevCarPage);
  garageSection?.addEventListener('click', nextWinnersPage);
  garageSection?.addEventListener('click', prevWinnersPage);
  garageSection?.addEventListener('click', removeCurrentCar);
  garageSection?.addEventListener('click', updateCurrentCarID);
  garageSection?.addEventListener('click', startAnimation);
  garageSection?.addEventListener('click', stopAnimation);

  const updateButton = document.getElementById('update-car') as HTMLElement;
  updateButton.addEventListener('click', updateCurrentCar);

  const addRandomCars = document.getElementById('generate-random-cars') as HTMLElement;
  addRandomCars?.addEventListener('click', () => generateRandomCars(CARS_TO_GENERATE));
} 
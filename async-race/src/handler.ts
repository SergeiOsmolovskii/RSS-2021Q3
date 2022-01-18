import { addCar } from "./api";
import { ICarBody } from "./components/interfaces";
import { updateGarage } from "./renderPage";

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
  console.log(createCarButton);
} 
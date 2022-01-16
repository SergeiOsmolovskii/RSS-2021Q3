export const handler = async () => {
  const garageSection = document.querySelector('.garage-section');
  const winnersSection = document.querySelector('.winners-section');
  
  const goToGarage = (e: Event) => {
    console.log(1);
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
} 
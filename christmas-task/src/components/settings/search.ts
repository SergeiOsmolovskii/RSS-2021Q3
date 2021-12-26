export const searchCard = (e: Event) => {
  const catergyTitle = document.querySelector('.catergy-title') as HTMLElement;
  const searchValue = (e.target as HTMLInputElement).value;
  const allCards = document.querySelectorAll('.toy-card__title');

  allCards.forEach((item) => {
    if (!item.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
      item.closest('.toy-card').classList.add('hide');
    } else {
      item.closest('.toy-card').classList.remove('hide');
    }
  });

  const hideCards = document.querySelectorAll('.hide');

  if (allCards.length === hideCards.length) {
    catergyTitle.textContent = 'Sorry, no matches found.';
  } else {
    catergyTitle.textContent = 'toys';
  }
};

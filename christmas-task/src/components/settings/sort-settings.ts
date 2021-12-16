import { OPTIONS_COUNT, OPTIONS_NAMES, SHAPE_TYPE, TOYS_COLOR, TOY_SIZE, MAX_TOYS_AMOUNT, MIN_TOYS_AMOUNT, MAX_PURCHASE_YEAR, MIN_PURCHASE_YEAR } from './constant';
import { createRange } from '../range-filter/range-filter';
import { Isettings } from '../../interfases/interfaces';

export const createElement = (className: Array<string>, tag: string, container: HTMLElement) => {
  const elem = document.createElement(tag);
  elem.classList.add(...className);
  container.append(elem);
  return elem;
};

/*  */

export const renderSettings = async () => {

  const settingAside = document.querySelector('.settings') as HTMLElement;
  const currentSettings: Isettings = JSON.parse(localStorage.getItem('settings'));
  const toysCountStep = 1;
  const yearStep = 5;


  const settingBlock = createElement(['settings__block'], 'div', settingAside);
  const soundButton = createElement(['settings__sound'], 'button', settingBlock);
  const settingsSearch = createElement(['settings__search'], 'label', settingBlock);
  const settingsInput = createElement(['settings__input'], 'input', settingsSearch);
  settingsInput.setAttribute('id', 'search');
  settingsInput.setAttribute('type', 'search');
  settingsInput.setAttribute('placeholder', 'Search');
  settingsInput.setAttribute('autocomplete', 'off');

  /*  */

  const sortBlock = createElement(['sort-block'], 'div', settingAside);
  const sortBlockTitle = createElement(['sort-block__title'], 'p', sortBlock);
  sortBlockTitle.textContent = 'Sort';
  const sortBlockSelect = createElement(['sort-block__select'], 'select', sortBlock);
  sortBlockSelect.setAttribute('id', 'sort');

  for (let i = 0; i < OPTIONS_COUNT; i++) {
    const sortBlockOption = createElement(['sort-block__option'], 'option', sortBlockSelect);
    sortBlockOption.setAttribute('value', i.toString());
    sortBlockOption.textContent = `${OPTIONS_NAMES[i]}`;
  }

  /*  */

  const categoriesBlock = createElement(['categories-block'], 'div', settingAside);
  const categoriesBlockTitle = createElement(['categories-block__title'], 'p', categoriesBlock);
  categoriesBlockTitle.textContent = 'Categories';
  const categoriesBlockCategories = createElement(['categories-block__categorise'], 'div', categoriesBlock);

  const categoriesBlockLabel = createElement(['categories-block__label'], 'label', categoriesBlockCategories);
  const categoriesBlockInput = createElement(['categories-block__input'], 'input', categoriesBlockLabel);
  categoriesBlockInput.setAttribute('id', 'categories-all');
  categoriesBlockInput.setAttribute('type', 'checkbox');

  const categoriesBlockSpan = createElement(['categories-block__span'], 'span', categoriesBlockLabel);
  categoriesBlockSpan.textContent = ' All ';

  /*  */

  const shapeBlock = createElement(['shape-block'], 'div', settingAside);
  const shapeBlockTitle = createElement(['shape-block__title'], 'p', shapeBlock);
  shapeBlockTitle.textContent = 'Shape';

  const shapeBlockItems = createElement(['shape-block__items'], 'div', shapeBlock);

  for (let i = 0; i < SHAPE_TYPE.length; i++) {
    const shapeBlockItem = createElement(['shape-block-item'], 'div', shapeBlockItems);
    shapeBlockItem.dataset.shape = SHAPE_TYPE[i].toLowerCase();

    if (currentSettings.shape.includes(SHAPE_TYPE[i].toLowerCase())) {
      shapeBlockItem.classList.add('shape-block-item--active')
    }

    const shapeBlockItemImg = createElement(['shape-block-item__img'], 'img', shapeBlockItem);
    shapeBlockItemImg.setAttribute('src', `./assets/icons/shape-icons/${SHAPE_TYPE[i].toLowerCase()}.svg`);
    shapeBlockItemImg.setAttribute('alt', `${SHAPE_TYPE[i]}`);
    const shapeBlockItemName = createElement(['shape-block-item__name'], 'p', shapeBlockItem);
    shapeBlockItemName.textContent = `${SHAPE_TYPE[i]}`;
  }

  /*  */

  const amountToys = createElement(['amount-toys'], 'div', settingAside);
  const amountToysTitle = createElement(['amount-toys__title'], 'p', amountToys);
  amountToysTitle.textContent = 'Amount toys';

  const amountToysInputBlock = createElement(['amount-toys__input-block'], 'div', amountToys);
  const amountToysMinValueSpan = createElement(
    ['amount-toys__span', 'amount-toys__span--left'],
    'span',
    amountToysInputBlock
  );
  amountToysMinValueSpan.setAttribute('id', 'amount-toys-min');
  const amountToysInput = createElement(['amount-toys__input'], 'div', amountToysInputBlock);
  amountToysInput.setAttribute('id', 'amount-toys-input');
  const amountToysMaxValueSpan = createElement(
    ['amount-toys__span', 'amount-toys__span--right'],
    'span',
    amountToysInputBlock
  );
  amountToysMaxValueSpan.setAttribute('id', 'amount-toys-max');

  createRange(
    'amount-toys-input',
    [currentSettings.amountToys[0], currentSettings.amountToys[1]],
    MIN_TOYS_AMOUNT,
    MAX_TOYS_AMOUNT,
    toysCountStep,
    'amount-toys-min',
    'amount-toys-max'
  );

  /*  */

  const purchaseYear = createElement(['purchase-year'], 'div', settingAside);
  const purchaseYearTitle = createElement(['purchase-year__title'], 'p', purchaseYear);
  purchaseYearTitle.textContent = 'Purchase year';

  const purchaseYearInputBlock = createElement(['purchase-year__input-block'], 'div', purchaseYear);
  const purchaseYearMinValueSpan = createElement(
    ['purchase-year__span', 'purchase-year__span--left'],
    'span',
    purchaseYearInputBlock
  );
  purchaseYearMinValueSpan.setAttribute('id', 'purchase-year-min');
  const purchaseYearInput = createElement(['purchase-year__input'], 'div', purchaseYearInputBlock);
  purchaseYearInput.setAttribute('id', 'purchase-year-input');
  const purchaseYearMaxValueSpan = createElement(
    ['purchase-year__span', 'purchase-year__span--right'],
    'span',
    purchaseYearInputBlock
  );
  purchaseYearMaxValueSpan.setAttribute('id', 'purchase-year-max');

  createRange(
    'purchase-year-input',
    [currentSettings.purchaseYear[0], currentSettings.purchaseYear[1]],
    MIN_PURCHASE_YEAR,
    MAX_PURCHASE_YEAR,
    yearStep,
    'purchase-year-min',
    'purchase-year-max'
  );

  /*  */

  const toysColor = createElement(['toys-color'], 'div', settingAside);
  const toysColorBlockTitle = createElement(['toys-color__title'], 'p', toysColor);
  toysColorBlockTitle.textContent = 'Toys color';
  const toysColorBlock = createElement(['toys-color__block'], 'div', toysColor);
 
  for (let i = 0; i < TOYS_COLOR.length; i++) {
    const toysColorButton = createElement(['color'], 'div', toysColorBlock);
    toysColorButton.dataset.color = TOYS_COLOR[i]; 

    if (currentSettings.colors.includes(TOYS_COLOR[i])) {
      toysColorButton.classList.add('color-active');  
    }
  
    toysColorButton.setAttribute('id', `color-${TOYS_COLOR[i]}`);
  }

  /*  */

  const sizeBlock = createElement(['size-block'], 'div', settingAside);
  const sizeBlockTitle = createElement(['size-block__title'], 'p', sizeBlock);
  sizeBlockTitle.textContent = 'Size';
  const sizeBlockCategories = createElement(['size-block__categorise'], 'div', sizeBlock);

  for (let i = 0; i < TOY_SIZE.length; i++) {
    const sizeBlockLabel = createElement(['size-block__label'], 'label', sizeBlockCategories);
    const sizeBlockInput = createElement(['size-block__input'], 'input', sizeBlockLabel);

    if (currentSettings.size.includes(TOY_SIZE[i])) (sizeBlockInput as HTMLInputElement).checked = true;
    else (sizeBlockInput as HTMLInputElement).checked = false;
    
    sizeBlockInput.setAttribute('id', `size-${TOY_SIZE[i].toLowerCase()}`);
    
    sizeBlockInput.setAttribute('type', 'checkbox');
    sizeBlockInput.setAttribute('value', `${TOY_SIZE[i].toLowerCase()}`);
    const sizeBlockSpan = createElement(['categories-block__span'], 'span', sizeBlockLabel);
    sizeBlockSpan.textContent = ` ${TOY_SIZE[i][0].toUpperCase()}${TOY_SIZE[i].slice(1)} `;
  }

  /*  */

  const favoriteBlock = createElement(['favorite-block'], 'div', settingAside);
  const favoriteBlockLabel = createElement(['favorite-block__label'], 'label', favoriteBlock);
  const favoriteBlockInput = createElement(['favorite-block__input'], 'input', favoriteBlockLabel);

  favoriteBlockInput.setAttribute('id', 'favorite-only');
  favoriteBlockInput.setAttribute('type', 'checkbox');
  (favoriteBlockInput as HTMLInputElement).checked = currentSettings.isFavorite;

  const favoriteBlockSpan = createElement(['favorite-categories-block__span'], 'span', favoriteBlockLabel);
  favoriteBlockSpan.textContent = ' Only favorite ';
};
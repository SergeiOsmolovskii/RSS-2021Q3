import { MAX_TREES } from "./constant";
import { MAX_BACKGROUNDS } from "./constant";
import { MAX_GARLANDS } from "./constant";
import { createElement } from "./sort-settings"
export const creatTreeBlock = () => {

    if (localStorage.getItem('treeNumber') === '' || localStorage.getItem('treeNumber') === null) {
        localStorage.setItem('treeNumber', '0');
    }

    if (localStorage.getItem('backgroundNumber') === '' || localStorage.getItem('backgroundNumber') === null) {
        localStorage.setItem('backgroundNumber', '0');
    }

    if (localStorage.getItem('garlandNumber') === '' || localStorage.getItem('garlandNumber') === null) {
        localStorage.setItem('garlandNumber', '0');
    }

    const main = document.querySelector('.main') as HTMLElement;
    main.textContent = '';

    const treeSettingAside = createElement(['tree-settings'], 'aside', main);
    const headerBlock = createElement(['tree-settings'], 'div', treeSettingAside);
    const headerBlockToys = createElement(['header-block__toys'], 'div', headerBlock);
    headerBlockToys.textContent = 'Toys';
    const headerBlockTree = createElement(['header-block__tree'], 'div', headerBlock);

    const treeSettingsBlock = createElement(['tree-settings__block'], 'div', treeSettingAside);

    const settingsSound = createElement(['settings__sound'], 'button', treeSettingsBlock);
    const snow = createElement(['snow'], 'button', treeSettingsBlock);
    const favoriteCardsCount = createElement(['favorite-cards-count'], 'div', treeSettingsBlock);

    const treesTypes = createElement(['trees-types'], 'div', treeSettingAside);
    const treesTypesTitle = createElement(['trees-types__title'], 'p', treesTypes);
    treesTypesTitle.textContent = 'Select the tree';
    const treesTypesBlock = createElement(['trees-types__block'], 'div', treesTypes);

    for (let i = 0; i < MAX_TREES; i++) {
        const treesTypesItem = createElement(['trees-types-item'], 'div', treesTypesBlock);
        treesTypesItem.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/tree/${i + 1}.png)`;
        treesTypesItem.dataset.treeNumder = `${i + 1}`;

        if (i.toString() === localStorage.getItem('treeNumber')) {
            treesTypesItem.classList.add('trees-types-item--active');
        }
    }
/* 
        function test() {
            const num = (this.dataset.treeNumder - 1).toString(); 
            localStorage.setItem('treeNumber', num);
            this.classList.toggle('trees-types-item--active');
        }

        treesTypesItem.addEventListener('click', test); */


            

    const backgroundTypes = createElement(['background-types'], 'div', treeSettingAside);
    const backgroundTypesTitle = createElement(['background-types__title'], 'p', backgroundTypes);
    backgroundTypesTitle.textContent = 'Select background';
    const backgroundTypesBlock = createElement(['background-types__block'], 'div', backgroundTypes);

    for (let i = 0; i < MAX_BACKGROUNDS; i++) {
        const backgroundTypesItem = createElement(['background-types-item'], 'div', backgroundTypesBlock);
        backgroundTypesItem.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/bg/${i + 1}.jpg)`;
        backgroundTypesItem.dataset.backgroundNumder = `${i + 1}`;

        if (i.toString() === localStorage.getItem('backgroundNumber')) {
            backgroundTypesItem.classList.add('background-types--active');
        }
    }
    
    const garland = createElement(['garland'], 'div', treeSettingAside);
    const garlandTitle = createElement(['garland__title'], 'p', garland);
    garlandTitle.textContent = 'Garland';
    const garlandBlock = createElement(['garland__block'], 'div', garland);

    for (let i = 0; i < MAX_GARLANDS; i++) {
        const garlandItem = createElement(['garland__color'], 'button', garlandBlock);
        garlandItem.dataset.garlandNumder = `${i + 1}`;

        if (i.toString() === localStorage.getItem('garlandNumber')) {
            garlandItem.classList.add('garland__color--active');
        }
    }

    const garlandLabel = createElement(['garland-checkbox'], 'label', treeSettingAside);
    const garlandInput = createElement(['garland__input'], 'input', garlandLabel);

    garlandInput.setAttribute('id', 'garland--active');
    garlandInput.setAttribute('type', 'checkbox');

    const garlandItem = createElement(['garland__item'], 'div', garlandLabel);

/*  */

    const treeBlock = createElement(['tree-block'], 'section', main);
    const mainTreeBlock = createElement(['main-tree__block'], 'div', treeBlock);
    const mainTreeImg = createElement(['main-tree__img'], 'img', mainTreeBlock);
    
    const currentTree = localStorage.getItem('treeNumber');

    mainTreeImg.setAttribute('src', `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/tree/${currentTree}.png`);
    mainTreeImg.setAttribute('alt', 'Christmas-tree');

    const selectedToys = createElement(['selected-toys'], 'aside', main);
    const selectedToysTitle = createElement(['selected-toys__title'], 'p', selectedToys);
    selectedToysTitle.textContent = 'Toys';

    const selectedToysBlock = createElement(['selected-toys__block'], 'div', selectedToys);
    const selectedToy = createElement(['selected-toy'], 'div', selectedToysBlock);
    

/* TO fix */

    // for (let i = 0; i < 5; i++) {
        
    // }

    // const selectedToyCount = createElement(['selected-toy__count'], 'div', selectedToy);



}
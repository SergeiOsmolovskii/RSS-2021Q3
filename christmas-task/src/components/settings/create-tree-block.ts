import { MAX_TREES, MAX_BACKGROUNDS, MAX_GARLANDS, MAX_FAVORITES_TOYS, GARLAND_COLORS, data } from "./constant";
import { createElement } from "./sort-settings"
import { Idata } from "../../interfases/interfaces";
import { mapCoords } from "../../data/mapCoors";
import { addGarland } from "../garland/garland";
export const creatTreeBlock = () => {

    if (localStorage.getItem('treeNumber') === '' || localStorage.getItem('treeNumber') === null) {
        localStorage.setItem('treeNumber', '1');
    }

    if (localStorage.getItem('backgroundNumber') === '' || localStorage.getItem('backgroundNumber') === null) {
        localStorage.setItem('backgroundNumber', '1');
    }

    if (localStorage.getItem('garlandNumber') === '' || localStorage.getItem('garlandNumber') === null) {
        localStorage.setItem('garlandNumber', '0');
    }

    let favoriteCardsNums: string = JSON.parse(localStorage.getItem('favoriteToys') !);
    const isPlay: string = localStorage.getItem('isPlay')!;


    const main = document.querySelector('.main') as HTMLElement;
    main.textContent = '';

    const treeSettingAside = createElement(['tree-settings'], 'aside', main);
    const headerBlock = createElement(['header-block'], 'div', treeSettingAside);
    const headerBlockToys = createElement(['header-block__toys'], 'div', headerBlock);
    headerBlockToys.textContent = 'Toys';
    const headerBlockTree = createElement(['header-block__tree', 'header-block--active'], 'div', headerBlock);
    headerBlockTree.textContent = 'Tree';
    const treeSettingsBlock = createElement(['tree-settings__block'], 'div', treeSettingAside);

    const settingsSound = createElement(['settings__sound'], 'button', treeSettingsBlock);
    if (isPlay === 'false') {
        settingsSound.classList.add('settings__sound--mute');
    }

    const snow = createElement(['snow'], 'button', treeSettingsBlock);
    const favoriteCardsCount = createElement(['favorite-cards-count'], 'div', treeSettingsBlock);
    favoriteCardsCount.textContent = favoriteCardsNums.length.toString();

    const treesTypes = createElement(['trees-types'], 'div', treeSettingAside);
    const treesTypesTitle = createElement(['trees-types__title'], 'p', treesTypes);
    treesTypesTitle.textContent = 'Select the tree';
    const treesTypesBlock = createElement(['trees-types__block'], 'div', treesTypes);

    for (let i = 1; i <= MAX_TREES; i++) {
        const treesTypesItem = createElement(['trees-types-item'], 'div', treesTypesBlock);
        treesTypesItem.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/tree/${i}.png)`;
        treesTypesItem.dataset.treeNumder = `${i}`;

        if (i.toString() === localStorage.getItem('treeNumber')) {
            treesTypesItem.classList.add('trees-types-item--active');
        }
    }

    const backgroundTypes = createElement(['background-types'], 'div', treeSettingAside);
    const backgroundTypesTitle = createElement(['background-types__title'], 'p', backgroundTypes);
    backgroundTypesTitle.textContent = 'Select background';
    const backgroundTypesBlock = createElement(['background-types__block'], 'div', backgroundTypes);

    for (let i = 1; i <= MAX_BACKGROUNDS; i++) {
        const backgroundTypesItem = createElement(['background-types-item'], 'div', backgroundTypesBlock);
        backgroundTypesItem.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/bg/${i}.jpg)`;
        backgroundTypesItem.dataset.backgroundNumder = `${i}`;

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
        garlandItem.dataset.garlandColor = GARLAND_COLORS[i];
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
    const currentBackground = localStorage.getItem('backgroundNumber');
    mainTreeBlock.style.background = `url('https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/bg/${currentBackground}.jpg') center no-repeat`;
    mainTreeBlock.style.backgroundSize = 'cover';


    const mainGarland = createElement(['main-tree__garland'], 'div', mainTreeBlock);
    addGarland('multicolor');
/* to fix */

    const treeMap = createElement(['tree-map'], 'map', mainTreeBlock);
    const treeMapArea = createElement(['tree-area'], 'area', treeMap);
    treeMapArea.setAttribute('shape', 'poly');
    treeMapArea.setAttribute('coords', mapCoords[1]);
    treeMap.setAttribute('name', 'tree-map');
    treeMapArea.dataset.dropTarget = 'true';


    const mainTreeImg = createElement(['main-tree__img'], 'img', mainTreeBlock);
    const currentTree = localStorage.getItem('treeNumber');
    mainTreeImg.setAttribute('src', `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/tree/${currentTree}.png`);
    mainTreeImg.setAttribute('alt', 'Christmas-tree');
    mainTreeImg.setAttribute('usemap', '#tree-map');

    const selectedToys = createElement(['selected-toys'], 'aside', main);

    const selectedToysTitle = createElement(['selected-toys__title'], 'p', selectedToys);
    selectedToysTitle.textContent = 'Toys';

    const selectedToysBlock = createElement(['selected-toys__block'], 'div', selectedToys);  
    
    /*  */

    let onlyFavorite: Idata[];
    
    if (favoriteCardsNums.length > 0) {
        onlyFavorite = data.filter(item => favoriteCardsNums.includes(item.num.toString()));
    } else {
        onlyFavorite = data.filter(item => item.num <= MAX_FAVORITES_TOYS);
    }

    for (let i = 0; i < onlyFavorite.length; i++) {
        
        const selectedToy = createElement(['selected-toy'], 'div', selectedToysBlock);
        
        selectedToy.dataset.dropTarget = 'true';

        selectedToy.dataset.imgNum = onlyFavorite[i].num.toString();
        const selectedToyCount = createElement(['selected-toy__count'], 'div', selectedToy);
        selectedToyCount.textContent = onlyFavorite[i].count.toString();
        for (let j = 0; j < onlyFavorite[i].count; j++) {
            const toy = createElement(['selected-toy__img'], 'img', selectedToy);
            toy.setAttribute('alt', 'toy-img'); 
            toy.setAttribute('id', `${i}-${j}`); 
            toy.setAttribute('draggable', 'true');
            toy.dataset.cardNum = onlyFavorite[i].num.toString();
            toy.setAttribute('src', `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/toys/${onlyFavorite[i].num}.png`);
        }
    }




}
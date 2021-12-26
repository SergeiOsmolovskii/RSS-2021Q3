import { createElement } from "../settings/sort-settings";
import { renderSettings } from "../settings/sort-settings";
import { handler } from "../../handler/handler";
import { createCards } from "../..";
import { initialSettings } from "../settings/start-settings";

const body = document.querySelector('body');
const main = document.querySelector('.main') as HTMLElement;
const title = document.querySelector('h1');
const startButton = document.querySelector('.start-game-button') as HTMLElement;


export const setBackgroundImage = () => {  
    body.style.background = '#192F2D';
    body.style.opacity = '0';
}

export const hideItems = () => {
    title.style.visibility = 'hidden';
    startButton.style.visibility = 'hidden';
}

export const setAsideBlocks =  () => { 
    const settingAside = createElement(['settings'], 'aside', main);
    const toysBlock = createElement(['toys-block'], 'aside', main);
    const categoryTitle = createElement(['catergy-title'], 'h2', toysBlock);
    categoryTitle.textContent = 'Toys';
    const toysCardContainer = createElement(['toys-cadr-container'], 'div', toysBlock);
    body.style.opacity = '1';
    return toysCardContainer;
}

export const startGame =  () => {
    initialSettings();
    setBackgroundImage();
    hideItems();
    setTimeout(async() => {
        addSettingBlock();
    }, 1100);
}

export const addSettingBlock = async () => {
    const toysCardContainer = setAsideBlocks();
    await renderSettings();  
    toysCardContainer.textContent = '';
    createCards();
    await handler();
    document.getElementById('search').focus();
}


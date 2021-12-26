import { Isettings } from "../interfases/interfaces";
import { MAX_FAVORITES_TOYS } from "../components/settings/constant";
import { createCards } from "..";
import { settings } from "../components/settings/start-settings";
import { renderSettings } from "../components/settings/sort-settings";
import { Card } from "../components/card/card";
import { searchCard } from "../components/settings/search";
import { toTheTree } from "../components/app/goToTheTree";
import { toTheSettings } from "../components/app/goToTheSettings";
import { playAudio } from "../components/audio/audio";

export const handler = async () => { 
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings') !);
    const shapeBlock = document.querySelector('.shape-block') as HTMLTemplateElement;
    const toysColorBlock = document.querySelector('.toys-color__block') as HTMLTemplateElement;
    const sizeBlock = document.querySelector('.size-block') as HTMLElement;
    const favoriteBlock = document.querySelector('.favorite-block') as HTMLElement;
    const toysCadrContainer = document.querySelector('.toys-cadr-container') as HTMLElement;
    const sortSelect = document.getElementById('sort') as HTMLElement;
    const search = document.getElementById('search') as HTMLElement;
    const resetSettings = document.getElementById('reset') as HTMLElement;
    const clearSettings = document.getElementById('clear') as HTMLElement;
    const soundButton = document.querySelector('.settings__sound') as HTMLElement;

    const setShape = (e: Event) => {
        const currentTargetItem = (e.target as Element).closest('.shape-block-item'); 
        if (currentTargetItem) {
            currentTargetItem.classList.toggle('shape-block-item--active');
            const currentShapeArray: Array<string> = [];
            shapeBlock.querySelectorAll('.shape-block-item--active').forEach(item => currentShapeArray.push((item as HTMLElement).dataset.shape));
            currentData.shape = currentShapeArray;
            localStorage.setItem('settings', JSON.stringify(currentData));
        }
        toysCadrContainer.textContent = '';
        createCards();
    }

    const setColor = (e: Event) => {
        if ((e.target as Element).closest('.color')) {
            (e.target as Element).closest('.color').classList.toggle('color-active');
            const currentColorArray: Array<string> = [];
            toysColorBlock.querySelectorAll('.color-active').forEach(item => currentColorArray.push((item as HTMLElement).dataset.color));
            currentData.colors = currentColorArray;
            localStorage.setItem('settings', JSON.stringify(currentData));
        }
        toysCadrContainer.textContent = '';
        createCards(); 
    }

    const setSize = (e: Event) => {
        if ((e.target as HTMLTemplateElement).closest('.size-block__input')) {
            const currentSizeArray: Array<string> = [];
            sizeBlock.querySelectorAll('.size-block__input').forEach(item => {
                
                if ((item as HTMLInputElement).checked === true) {
                    currentSizeArray.push((item as HTMLInputElement).value);
                } else {
                    currentSizeArray.push('');
                } 
            });

            currentData.size = currentSizeArray;
            localStorage.setItem('settings', JSON.stringify(currentData));
            toysCadrContainer.textContent = '';
            createCards(); 
        }
    }

    const setFavorite = (e: Event) => {
        if ((e.target as HTMLTemplateElement).closest('.favorite-block')) {   
            currentData.isFavorite = (e.target as HTMLInputElement).checked;
            localStorage.setItem('settings', JSON.stringify(currentData));
        }
        toysCadrContainer.textContent = '';
        createCards(); 
    }

    sortSelect.addEventListener('change', (e: Event) => {
        toysCadrContainer.textContent = '';
        const targetValue = (e.target as HTMLSelectElement).value; 
        localStorage.setItem('sortFilter', targetValue);
        createCards();
    });

    const errorNotice = (target: HTMLTemplateElement) => {
        target.classList.add('toy-card--error');
        setTimeout(() => {
            target.classList.remove('toy-card--error');
        }, 3000);

    }

    const currentCard = (e: Event) => {
        const targetCard = (e.target as HTMLTemplateElement).closest('.toy-card');
        const targetCardNum = (targetCard as HTMLElement).dataset.num;
        let favoriteCards: Array<string> = JSON.parse(localStorage.getItem('favoriteToys')!);
        let favoriteCardsSet = new Set (favoriteCards);
        const favoriteCardsCount = document.querySelector('.favorite-cards-count');

        if (targetCard) {
            if  (favoriteCardsSet.size >= MAX_FAVORITES_TOYS && !targetCard.classList.contains('toy-card--favorite')) {
                errorNotice(targetCard as HTMLTemplateElement);
            } else {
                targetCard.classList.toggle('toy-card--favorite');               
                if (targetCard.classList.contains('toy-card--favorite')) {
                    favoriteCardsCount!.textContent = (parseInt(favoriteCardsCount.textContent) + 1).toString();
                    favoriteCardsSet.add(targetCardNum!);
                    localStorage.setItem('favoriteToys', JSON.stringify([...favoriteCardsSet]));
                } else {
                    favoriteCardsCount!.textContent = (parseInt(favoriteCardsCount.textContent) - 1).toString(); 
                    favoriteCardsSet.delete(targetCardNum!);
                    localStorage.setItem('favoriteToys', JSON.stringify([...favoriteCardsSet]));
                }    
            }
        }
    }

    const reset = async () => {
        const settingsBlock = document.querySelector('.settings');
        const cadrsContainer = document.querySelector('.toys-cadr-container');
        localStorage.setItem('settings', JSON.stringify(settings));
        settingsBlock.textContent = '';
        await renderSettings();
        cadrsContainer.textContent = '';
        await createCards();
        await handler();
    }

    const clearlocalStorage = () => {
        localStorage.clear();
    }

    const goToTheTree = document.querySelector('.header-block__tree') as HTMLElement;
    goToTheTree.addEventListener('click', toTheTree);
    
    const goToTheSettings = document.querySelector('.header-block__toys') as HTMLElement;
    goToTheSettings.addEventListener('click', toTheSettings);

    search.addEventListener('input', searchCard);
    clearSettings.addEventListener('click', clearlocalStorage);
    toysCadrContainer.addEventListener('click', currentCard);
    shapeBlock.addEventListener('click', setShape);
    toysColorBlock.addEventListener('click', setColor);
    sizeBlock.addEventListener('change', setSize);
    favoriteBlock.addEventListener('change', setFavorite);
    resetSettings.addEventListener('click', reset);
    soundButton.addEventListener('click', playAudio);    
}
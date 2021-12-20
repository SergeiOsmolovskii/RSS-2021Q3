import { Isettings } from "../interfases/interfaces";
import { MAX_FAVORITES_TOYS } from "../components/settings/constant";
import { createCards } from "..";
import { settings } from "../components/settings/start-settings";
import { renderSettings } from "../components/settings/sort-settings";
import { Card } from "../components/card/card";
export const handler = async () => { 
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings'));
    const shapeBlock: HTMLTemplateElement = document.querySelector('.shape-block');
    const toysColorBlock: HTMLTemplateElement = document.querySelector('.toys-color__block');
    const sizeBlock: HTMLElement = document.querySelector('.size-block');
    const favoriteBlock: HTMLElement = document.querySelector('.favorite-block');
    const toysCadrContainer: HTMLElement = document.querySelector('.toys-cadr-container');
    const sortSelect: HTMLElement = document.getElementById('sort');
    const resetSettings: HTMLElement = document.getElementById('reset');


    const setShape = (e: Event) => {

        if ((e.target as Element).closest('.shape-block-item')) {
            (e.target as Element).closest('.shape-block-item').classList.toggle('shape-block-item--active');
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

    sortSelect.addEventListener('change', () => {
        toysCadrContainer.textContent = '';
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
        let favoriteCards = JSON.parse(localStorage.getItem('favoriteToys'));
        let favoriteCardsSet = new Set (favoriteCards);
        const favoriteCardsCount = document.querySelector('.favorite-cards-count');

        if (targetCard) {
            if  (favoriteCardsSet.size >= MAX_FAVORITES_TOYS && !targetCard.classList.contains('toy-card--favorite')) {
                errorNotice(targetCard as HTMLTemplateElement);
            } else {
                targetCard.classList.toggle('toy-card--favorite');
                
                if (targetCard.classList.contains('toy-card--favorite')) {
                    favoriteCardsCount.textContent = (parseInt(favoriteCardsCount.textContent) + 1).toString();
                    favoriteCardsSet.add(targetCardNum);
                    localStorage.setItem('favoriteToys', JSON.stringify([...favoriteCardsSet]));
                } else {
                    favoriteCardsCount.textContent = (parseInt(favoriteCardsCount.textContent) - 1).toString(); 
                    favoriteCardsSet.delete(targetCardNum);
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
        await handler();
        cadrsContainer.textContent = '';
        await createCards();
    }
    
    resetSettings.addEventListener('click', reset)
    toysCadrContainer.addEventListener('click', currentCard);
    shapeBlock.addEventListener('click', setShape);
    toysColorBlock.addEventListener('click', setColor);
    sizeBlock.addEventListener('change', setSize);
    favoriteBlock.addEventListener('change', setFavorite);
}
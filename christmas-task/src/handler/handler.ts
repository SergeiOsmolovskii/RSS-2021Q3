import { Isettings } from "../interfases/interfaces";
import { createCards } from "..";
export const handler = () => { 
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings'));
    const shapeBlock: HTMLTemplateElement = document.querySelector('.shape-block');
    const toysColorBlock: HTMLTemplateElement = document.querySelector('.toys-color__block');
    const sizeBlock: HTMLElement = document.querySelector('.size-block');
    const favoriteBlock: HTMLElement = document.querySelector('.favorite-block');
    
    const toysCadrContainer: HTMLElement = document.querySelector('.toys-cadr-container');
    
    toysCadrContainer.textContent = '';
    createCards();

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
            currentData.isFavorite = (e.target as HTMLInputElement).checked
            localStorage.setItem('settings', JSON.stringify(currentData));
        }
        toysCadrContainer.textContent = '';
        createCards(); 
    }


    shapeBlock.addEventListener('click', setShape);
    toysColorBlock.addEventListener('click', setColor);
    sizeBlock.addEventListener('change', setSize);
    favoriteBlock.addEventListener('change', setFavorite);
}
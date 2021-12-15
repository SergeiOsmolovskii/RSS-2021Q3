import { Isettings } from "../interfases/interfaces";
import { createCards } from "..";
export const handler = () => { 
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings'));
    const shapeBlock: HTMLTemplateElement = document.querySelector('.shape-block');
    const toysColorBlock: HTMLTemplateElement = document.querySelector('.toys-color__block');
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







    shapeBlock.addEventListener('click', setShape);
    toysColorBlock.addEventListener('click', setColor);

}
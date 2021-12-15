import { Isettings } from "../interfases/interfaces";
import { createCards } from "..";
export const handler = () => { 
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings'));
    const shapeBlock: HTMLTemplateElement = document.querySelector('.shape-block');
    const toysCadrContainer: HTMLElement = document.querySelector('.toys-cadr-container');
    
    console.log(toysCadrContainer)
    
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







    shapeBlock.addEventListener('click', setShape);

}
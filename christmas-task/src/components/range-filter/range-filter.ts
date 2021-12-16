import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './range-filter.css';
import { TargeteElement } from '../../interfases/interfaces';
import { createCards } from '../..';


export const createRange =  async (blockID:string, startPointsArr:Array<number>, minRangeValue:number, maxRangeValue:number, step:number, lowerValueID?:string, upperValueID?:string) => {
    const toysCadrContainer: HTMLElement = document.querySelector('.toys-cadr-container');
    const toysAmountSlider = document.getElementById(blockID) as TargeteElement;

    noUiSlider.create(toysAmountSlider, {
        start: startPointsArr,
        connect: true,
        range: {
            'min': minRangeValue,
            'max': maxRangeValue
        },
        step: step
    });
    const nodes = [
        document.getElementById(lowerValueID), 
        document.getElementById(upperValueID) 
    ];
    
    toysAmountSlider.noUiSlider.on('update', function (values:Array<string>, handle:number) {
    nodes[handle].textContent = values[handle].slice(0, -3);

    let currentData = JSON.parse(localStorage.getItem('settings'));
    
    if (toysAmountSlider.id === 'amount-toys-input') {
        currentData.amountToys[0] = parseInt(values[0].slice(0, -3));
        currentData.amountToys[1] = parseInt(values[1].slice(0, -3));
    }

    if (toysAmountSlider.id === 'purchase-year-input') {
        currentData.purchaseYear[0] = parseInt(values[0].slice(0, -3));
        currentData.purchaseYear[1] = parseInt(values[1].slice(0, -3));
    }

    localStorage.setItem('settings', JSON.stringify(currentData));

    toysCadrContainer.textContent = '';
    createCards();
});

}
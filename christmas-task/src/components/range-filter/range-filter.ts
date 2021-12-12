import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './range-filter.css';
import { TargeteElement } from '../../interfases/interfaces';

export const createRange =  async (blockID:string, startPointsArr:Array<number>, minRangeValue:number, maxRangeValue:number, step:number, lowerValueID?:string, upperValueID?:string) => {
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
    
    toysAmountSlider.noUiSlider.on('update', function (values:string[], handle:number) {
    nodes[handle].textContent = values[handle].slice(0, -3);
});

}

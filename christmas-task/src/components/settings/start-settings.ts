import { Isettings } from "../../interfases/interfaces";
import { SHAPE_TYPE, TOYS_COLOR, TOY_SIZE, MAX_TOYS_AMOUNT, MIN_TOYS_AMOUNT, MAX_PURCHASE_YEAR, MIN_PURCHASE_YEAR } from './constant';

let settings: Isettings = {
  categories: ['all'] ,
  shape: SHAPE_TYPE,
  colors: TOYS_COLOR,
  amountToys: [MIN_TOYS_AMOUNT, MAX_TOYS_AMOUNT],
  purchaseYear: [MIN_PURCHASE_YEAR, MAX_PURCHASE_YEAR],
  size: TOY_SIZE,
  isFavorite: false
}

export const initialSettings = () => {


  if (localStorage.getItem('settings') === null || localStorage.getItem('settings') === '') {   
    localStorage.setItem('settings', JSON.stringify(settings));
  }
  
  console.log(localStorage.getItem('settings'));

}
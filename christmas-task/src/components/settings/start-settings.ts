import { Isettings } from "../../interfases/interfaces";
import { SHAPE_TYPE, TOYS_COLOR, TOY_SIZE, MAX_TOYS_AMOUNT, MIN_TOYS_AMOUNT, MAX_PURCHASE_YEAR, MIN_PURCHASE_YEAR } from './constant';

export let settings: Isettings = {
  categories: ['all'] ,
  shape: SHAPE_TYPE,
  colors: TOYS_COLOR,
  amountToys: [MIN_TOYS_AMOUNT, MAX_TOYS_AMOUNT],
  purchaseYear: [MIN_PURCHASE_YEAR, MAX_PURCHASE_YEAR],
  size: TOY_SIZE,
  isFavorite: false
}

let sortFilter = 0;
let favoriteToys: Array<string> = [];

export const initialSettings = () => {
  if (localStorage.getItem('settings') === null || localStorage.getItem('settings') === '') {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  if (localStorage.getItem('favoriteToys') === null || localStorage.getItem('favoriteToys') === '') {
    localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys));
  }

  if (localStorage.getItem('sortFilter') === null || localStorage.getItem('sortFilter') === '') {
    localStorage.setItem('sortFilter', '0');
  }
};
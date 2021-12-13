import { API } from "nouislider";

export interface TargeteElement extends HTMLElement {
    noUiSlider?: API;
} 

export interface Idata {
    name: string,
    num: number
    count: number,
    year: number,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
}
export interface Isettings {
    categories: Array<string>,
    shape: Array<string>,
    amountToys: Array<number>,
    purchaseYear: Array<number>
    colors: Array<string>,
    size: Array<string>,
    isFavorite: boolean
}
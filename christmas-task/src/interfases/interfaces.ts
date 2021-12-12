import { API } from "nouislider";

export interface TargeteElement extends HTMLElement {
    noUiSlider?: API;
} 

export interface Idata {
    name: string,
    count: number,
    year: number,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
}
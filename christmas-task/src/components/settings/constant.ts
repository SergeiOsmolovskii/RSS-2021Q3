import { getData } from "../get-data";

export const data = await getData();

export const OPTIONS_COUNT: number = 4;
export const MAX_FAVORITES_TOYS: number = 20;
export const OPTIONS_NAMES: Array<string> = [
  'By name from A to Z',
  'By name from Z to A',
  'In ascending order of year',
  'In descending order of year'
];

export const TOYS_COLOR: Array<string> = data.map(item => item.color).filter((item, index, array) => array.indexOf(item) === index);
export const SHAPE_TYPE: Array<string> = data.map(item => item.shape).filter((item, index, array) => array.indexOf(item) === index);
export const TOY_SIZE: Array<string> = data.map(item => item.size).filter((item, index, array) => array.indexOf(item) === index);
const toysCount = data.map(item => Math.max(item.count));
export const MAX_TOYS_AMOUNT = Math.max(...toysCount);
export const MIN_TOYS_AMOUNT = 1;
const purchaseYear = data.map(item => Math.max(item.year));
export const MAX_PURCHASE_YEAR = Math.max(...purchaseYear);
export const MIN_PURCHASE_YEAR = Math.min(...purchaseYear);

export const MAX_TREES = 6;
export const MAX_BACKGROUNDS = 8;
export const MAX_GARLANDS = 5;
import { getData } from "../get-data";

export const data = await getData();

export const OPTIONS_COUNT: number = 4;
export const OPTIONS_NAMES: Array<string> = [
  'By name from A to Z',
  'By name from Z to A',
  'In ascending order of quantity',
  'In descending order of quantity',
];

export const SHAPE_TYPE: Array<string> = ['Ball', 'Bell', 'Pine', 'Star', 'Snowflake', 'Statuette'];
export const TOYS_COLOR: Array<string> = ['white', 'yellow', 'red', 'blue', 'green'];
export const TOY_SIZE: Array<string> = ['Big', 'Medium', 'Small'];


const toysCount = data.map(item => Math.max(item.count));
export const MAX_TOYS_AMOUNT = Math.max(...toysCount);
export const MIN_TOYS_AMOUNT = 1;

const purchaseYear = data.map(item => Math.max(item.year));

export const MAX_PURCHASE_YEAR = Math.max(...purchaseYear);
export const MIN_PURCHASE_YEAR = Math.min(...purchaseYear);
import { MAX_ITEM_PER_PAGE } from "./constants";
import { MAX_WINNERS_PER_PAGE } from "./constants";


const url = 'http://127.0.0.1:3000';
const garage = `${url}/garage`;
const engine = `${url}/engine`;
const winners = `${url}/winners`;

export const getCars = async (page: number) => {
  const response = await fetch (`${garage}?_page=${page}&_limit=${MAX_ITEM_PER_PAGE}`);
  return {
    item: await response.json(),
    count: response.headers.get('X-Total-Count')
  }
};

export const getWinners = async (page: number, sort: string, order: string) => {
  const response = await fetch (`${winners}?_page=${page}&_limit=${MAX_WINNERS_PER_PAGE}&_sort=${sort}&_order=${order}`);
  return {
    winners: await response.json(),
    count: response.headers.get('X-Total-Count')
  }
};
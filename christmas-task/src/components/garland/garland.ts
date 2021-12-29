import { GARLAND_SIZE } from "../settings/constant";
import { createElement } from "../settings/sort-settings";

export const addGarland = (color: string) => {
  const garlandContainer = document.querySelector('.main-tree__garland') as HTMLElement;
  for (let i = 0; i < GARLAND_SIZE; i++) {
    const ul = document.createElement('ul');
    const garlandUl = createElement(['garland-ul'], 'ul', garlandContainer);
    for (let j = 0; j < 3 + (i * 2); j++) {
      const offsetDeg = 180 / ((3 + (i * 2) - 1));
      const offset = 180 - offsetDeg * j;
      const garlandLi = createElement(['garland-li', color], 'li', garlandUl);
      garlandLi.style.transform = `rotate(${offset}deg) translate(${(3 + (i * 2) + 5 )}px)`
    }
  }
}
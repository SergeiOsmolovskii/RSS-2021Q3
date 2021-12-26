import { data } from "../components/settings/constant";
import { Isettings } from "../interfases/interfaces";

export const sortSettings = async () => {
    const toysCadrContainer: HTMLElement | null = document.querySelector('.toys-cadr-container');
    const sortSelect: HTMLElement | null = document.getElementById('sort');
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings')!);
    const colorsSet = new Set(currentData.colors);
    const shapeSet = new Set(currentData.shape);

    const sizeSet = new Set(currentData.size);
    const sorterData = data.filter(item => item.count >= currentData.amountToys[0] && item.count <= currentData.amountToys[1])
                           .filter(item => item.year >= currentData.purchaseYear[0] && item.year <= currentData.purchaseYear[1])
                           .filter(item => colorsSet.has(item.color))
                           .filter(item => sizeSet.has(item.size))
                           .filter(item => shapeSet.has(item.shape))
                           .filter(item => currentData.isFavorite === true ? item.favorite === true : item);

    switch ((sortSelect as HTMLInputElement).value) {
      case '0':
        sorterData.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
        });
        break;
      case '1':
        sorterData.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (b.name > a.name) return 1;
        });
        break;
      case '2':
        sorterData.sort((a, b) => a.year - b.year);
        break;
      case '3':
        sorterData.sort((a, b) => b.year - a.year);
        break;
    }
    return sorterData;
}
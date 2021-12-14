import { data } from "../components/settings/constant";
import { Isettings } from "../interfases/interfaces";

export const sortSettings = async () => {
    const currentData: Isettings = JSON.parse(localStorage.getItem('settings'));
    const colorsSet = new Set(currentData.colors);
    const shapeSet = new Set(currentData.shape);

    const sizeSet = new Set(currentData.size);
    const sorterData = data.filter(item => item.count >= currentData.amountToys[0] && item.count <= currentData.amountToys[1])
                           .filter(item => item.year >= currentData.purchaseYear[0] && item.year <= currentData.purchaseYear[1])
                           .filter(item => colorsSet.has(item.color))
                           .filter(item => sizeSet.has(item.size))
                           .filter(item => shapeSet.has(item.shape))
                           .filter(item => currentData.isFavorite === true ? item.favorite === true : item);



    console.log(colorsSet);
    return sorterData;
}
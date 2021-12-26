import { setBackgroundImage } from "./start-game";
import { toTheTree } from "./goToTheTree";
import { initialSettings } from "../settings/start-settings";
import { addSettingBlock } from "./start-game";

const body = document.querySelector('body') as HTMLElement;
const main = document.querySelector('.main') as HTMLElement;

export const toTheSettings = () => {
  setBackgroundImage();
  initialSettings();
  setTimeout(async() => {
    body.style.opacity = '1';
    main.textContent = '';
    await addSettingBlock();  

    const goToTheSettings = document.querySelector('.header-block__toys') as HTMLElement;
    goToTheSettings.addEventListener('click', toTheSettings);

    const goToTheTree = document.querySelector('.header-block__tree') as HTMLElement;
    goToTheTree.addEventListener('click', toTheTree);
}, 1100);
}
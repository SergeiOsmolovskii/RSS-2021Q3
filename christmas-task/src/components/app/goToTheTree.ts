import { creatTreeBlock } from "../settings/create-tree-block";
import { toTheSettings } from "./goToTheSettings";
import { treeHandler } from "../../handler/treeHandler";
const body = document.querySelector('body');

const setBackground = () => {
  body.style.opacity = '0';
};

export const toTheTree = () => {
  setBackground();
  setTimeout(async() => {
    body.style.background = `url('https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/bg.jpg'`;
    body.style.backgroundSize = `cover`;

    body.style.opacity = '1';
    creatTreeBlock();
    treeHandler();
    const goToTheTree = document.querySelector('.header-block__tree');
    goToTheTree.addEventListener('click', toTheTree);

    const goToTheSettings = document.querySelector('.header-block__toys');
    goToTheSettings.addEventListener('click', toTheSettings);
}, 1100);
  
}
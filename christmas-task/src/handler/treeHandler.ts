import { playAudio } from "../components/audio/audio";
import { addSnow } from "../components/snow/addSnow";
import { dragEvents } from "../components/drag";
  const setCurrentTree = (e:Event) => {
  const curretnTreeNumber: string | undefined = (e.target as HTMLElement).dataset.treeNumder; 
  const allTrees = document.querySelectorAll('.trees-types-item');
  const mainTree = document.querySelector('.main-tree__img') as HTMLElement;

  allTrees.forEach(item => item.classList.remove('trees-types-item--active'));
  localStorage.setItem('treeNumber', curretnTreeNumber as string);

  if ((e.target as HTMLElement).classList.contains('trees-types-item')) {
    (e.target as HTMLElement).classList.add('trees-types-item--active');
    mainTree.setAttribute('src', `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/tree/${curretnTreeNumber}.png`);
    mainTree.setAttribute('alt', 'Christmas-tree');
  }
}

const setCurrentBackground = (e:Event) => {
  const curretnBackgroundNumber = (e.target as HTMLElement).dataset.backgroundNumder as string; 
  const allBackground = document.querySelectorAll('.background-types-item');
  const mainBackground = document.querySelector('.main-tree__block') as HTMLElement;

  allBackground.forEach(item => item.classList.remove('background-types--active'));
  localStorage.setItem('backgroundNumber', curretnBackgroundNumber);

  if ((e.target as HTMLElement).classList.contains('background-types-item')) {
    (e.target as HTMLElement).classList.add('background-types--active');
    mainBackground.style.background = `url('https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/bg/${curretnBackgroundNumber}.jpg') center no-repeat`;
    mainBackground.style.backgroundSize = 'cover';
  }

}

const updateSnow = (e: Event) => {
  const snowIcon = e.target as HTMLElement;
  snowIcon.classList.toggle('snow--active');

  let snowInterval = setInterval(() => {
    addSnow();
    if (snowIcon.classList.contains('snow--active')) snowInterval;
    else clearInterval(snowInterval);
  }, 50);
}

export const treeHandler = async () => {
  const treesTypesBlock = document.querySelector('.trees-types__block') as HTMLElement;
  const backgroundTypesBlock = document.querySelector('.background-types__block') as HTMLElement;
  const soundButton = document.querySelector('.settings__sound') as HTMLElement;
  const snow = document.querySelector('.snow') as HTMLElement;

  treesTypesBlock.addEventListener('click', setCurrentTree);
  backgroundTypesBlock.addEventListener('click', setCurrentBackground);
  soundButton.addEventListener('click', playAudio);    
  snow.addEventListener('click', updateSnow);
  await dragEvents();    
}
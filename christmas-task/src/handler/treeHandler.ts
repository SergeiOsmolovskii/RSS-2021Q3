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


export const treeHandler = () => {
  const treesTypesBlock = document.querySelector('.trees-types__block') as HTMLElement;
  const backgroundTypesBlock = document.querySelector('.background-types__block') as HTMLElement;
  treesTypesBlock.addEventListener('click', setCurrentTree);
  backgroundTypesBlock.addEventListener('click', setCurrentBackground);
  console.log('Handler');
}


export const addSnow = () => {
  const mainTreeBlock = document.querySelector('.main-tree__block') as HTMLElement;
	
  const snowFlake = document.createElement('i');
	snowFlake.classList.add('fas');
	snowFlake.classList.add('fa-snowflake');
  snowFlake.style.left = Math.random() * mainTreeBlock.offsetWidth + 'px';
	snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snowFlake.style.opacity = Math.random().toString();
	snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

  mainTreeBlock.append(snowFlake);

  setTimeout(() => {
		snowFlake.remove();
	}, 3000);
}
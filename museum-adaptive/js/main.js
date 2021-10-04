/* Vide and audio range */
const progress = document.querySelectorAll('.control-input');
  
progress.forEach(item =>item.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4)`
}))

/* Gallery */
const pictureInnerContainer = document.querySelector('.picture-inner-container');

let imgCount = 15;
let imgArr = [...Array(+`${imgCount}`).keys()].map(item => item +1)

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(imgArr)

imgArr.map(item => {
  const img = document.createElement('img');
  img.src = `./assets/img/gallery/galery${item}.jpg`;
  img.alt = `galery${item}`;
  pictureInnerContainer.append(img);
})

/* Open form */

const bookBtn = document.querySelector('.book-btn');
const buyTicketsBtn = document.querySelector('#buy-tickets');
const overlayMain = document.querySelector('.overlay-main');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');

const openPopup = () => {
  popup.style.left = '50%';
  overlayMain.style.left = '0';
  popupOverlay.style.left = '0';
}

function closePopup (e) {

  if (e.target === popupOverlay || e.target === popupClose) {
    popup.style.left = '-100%';
    overlayMain.style.left = '-100%';
    popupOverlay.style.left = '-100%';
  }
}

buyTicketsBtn.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);


/* Ripple effect */

bookBtn.addEventListener('click', function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.left = x + 'px'
  circle.style.top = y + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})


const discoverBtn = document.querySelector('.discover-btn');

/* open in new tab  */

discoverBtn.addEventListener('click', function() {
  window.open('./tours/tour1.html', '_blank');
})


/* Add mobile menu */

let link = document.querySelector('.menu-link');
let linkActive = document.querySelector('.menu-link-active');
let mobileMenu = document.querySelector('.mobile-menu');
let greetings = document.querySelector('.greetings');
let relative = document.querySelector('.relative');


function addMobileMenu() {
  const screenWidth = window.screen.width;
  mobileMenu.classList.toggle('mobile-menu_active');
  link.classList.toggle('menu-link_active');
  if (screenWidth <= 768) {
    relative.classList.toggle('opacity');
  } else if (screenWidth > 768) {
    greetings.classList.toggle('opacity');
  }
}

link.addEventListener('click', addMobileMenu);


/* Create Iframe */

function findVideos() {
  let videos = document.querySelectorAll('.video-slide');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video-button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);
      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}


function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/(maxresdefault|hqdefault)\.jpg|webp/i;
  let url = media.src;
  let match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  console.log(id)
  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

console.log(`
Ваша оценка - 155 баллов 
Отзыв по пунктам ТЗ:
Вёрстка соответствует макету. Ширина экрана 1024px +40
Вёрстка соответствует макету. Ширина экрана 768px +40
Вёрстка соответствует макету. Ширина экрана 420px +40
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,  элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом. +6

Cлайдера в секции Welcome +2
Cлайдера сравнения изображений в секции Explore +2
Кастомного видеоплеера в секции Video +2
Слайдера в секции Video +2
YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого +2
Галереи изображений и изображений в ней (Размеры уменьшаются на некоторых больших разрешениях может нехватать картинок  в третей колонке, но в ТЗ об этом, вроде ничего не указано) +2 
Карты +2
При нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2
Ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2
Вёрстка меню соответствует макету на всех проверяемых разрешениях +6

При клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается +1 (не закрывается при клике по ссылке) 
Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов (Это тот ещё рандом у меня получалось и 99 и 70) Есть скриншоты. Оценка, как проверите.

`)


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














console.log(`
Ваша оценка - 158 баллов 
Отзыв по пунктам ТЗ:

Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. "Document checking completed. No errors or warnings to show." +10
В коде присудствуют: 
  header, main, footer +2
  семь элементов section (по количеству секций) +2 
  только один заголовок h1 +2
  семь заголовков h2 (по количеству секций) +2 
  шесть заголовков h3 (по количеству карточек) +2 
  два элемента nav (основная и вспомогательная панель навигации) +2
  три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) +2
  тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) +2
  три тега input type="radio" (в секции Tickets) +2
  два тега input type="number"(в секции Tickets) +2
  два тега input type="range" (громкось и прогрес-бар видео) +2
  для всех элементов img указан обязательный атрибут alt +2

Боки соответствующие макету:
  блок header +5
  секция Welcome +5
  секция Visiting +5
  секция Explore +5
  секция Video +5
  секция Gallery +5
  секция Tickets +5
  секция Contacts +5
  блок footer +5

Форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей +2
Форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2
При вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select +8 
Вёрстка формы соответствует макету (select немного отличается) +8
Добавлен favicon +2
Для построения сетки используются флексы или гриды +2
При уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
Фоновый цвет каждого блока и секции тянется на всю ширину страницы +2
Иконки добавлены в формате .svg  +2
Расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2
Переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2
В блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2
В футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2
Плавная прокрутка по якорям +5
Параллакс +5
При кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5 
Изменение стиля интерактивных элементов при наведении и клике. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменения +4
Обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +2
Интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки +2
Интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый +2
Можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2
Кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2
Кнопке "Book" в форме покупки билетов добавлен ripple-эффект +2 
При перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке +10 

`)
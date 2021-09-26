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
  //img.classList.add('gallery-img')
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

  setTimeout(() => circle.remove(), 50000)
})
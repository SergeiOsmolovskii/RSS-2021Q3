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

const closePopup = () => {
  popup.style.left = '-100%';
  overlayMain.style.left = '-100%';
  popupOverlay.style.left = '-100%';
}


buyTicketsBtn.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
overlayMain.addEventListener('click', closePopup);



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






/* Slider */
function slider({
  slide,
  nextSlide,
  prevSlide,
  totalCounter,
  currentCounter,
  wrapper,
  field,
  dot
}) {
  let slides = document.querySelectorAll(slide);
  let next = document.querySelector(nextSlide);
  let prev = document.querySelector(prevSlide);
  let totalSlides = document.querySelector(totalCounter);
  let current = document.querySelector(currentCounter);
  let slidesWrapper = document.querySelector(wrapper);
  let slidesField = document.querySelector(field);
  let width = window.getComputedStyle(slidesWrapper).maxWidth;
  let dots = document.querySelectorAll(dot);
  let slideIndex = 1;
  let offset = 0;



//   slidesField.style.transition = `none`;
//  slidesField.style.transform = `translateX(-${offset}px)`; 


  if (slides.length < 10) {
    totalSlides.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    totalSlides.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slides.forEach(slide => slide.style.width = width);

  let addZero = () => {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  };

  let addCurrentDot = () => {
    dots.forEach(dot => dot.classList.remove('square-active'));
    dots[slideIndex - 1].classList.add('square-active');
  };

  let toNumber = (param) => {
    return +param.replace(/\D/g, "");
  };

  next.addEventListener('click', () => {
    console.log(slideIndex)
    if (offset == toNumber(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += toNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    addZero();
    addCurrentDot();
  });

  prev.addEventListener('click', () => {
    console.log(slideIndex)

    if (offset == 0) {
      offset = toNumber(width) * (slides.length - 1);
    } else {
      offset -= toNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    addZero();
    addCurrentDot()
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      let slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = toNumber(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      addZero();
      addCurrentDot()
    });
  });
}


slider({
  nextSlide: '.next-slide',
  prevSlide: '.prev-slide',
  slide: '.slide',
  totalCounter: '#total-slides',
  currentCounter: '#current-slide',
  wrapper: '.main-slider',
  field: '.slides-inner',
  dot: '.square'
});



/* Explore  comparison*/

function comparisonImg() {
  const container = document.querySelector('.explore-comparison-container');
  const comparison = document.querySelector('.explore-comparison');
  const before = document.querySelector('.left-img');
  const beforeImage = before.querySelector('img');
  const change = document.querySelector('.change');
  const body = document.querySelector('.explore');

  let isActive = false;

  document.addEventListener('DOMContentLoaded', () => {
    let width = window.getComputedStyle(container).maxWidth;
    beforeImage.style.width = `${width}px`;
  });

  change.addEventListener('mousedown', () => {
    isActive = true;
  });

  body.addEventListener('mouseup', () => {
    isActive = false;
  });

  body.addEventListener('mouseleave', () => {
    isActive = false;
  });

  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, comparison.offsetWidth - 5));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  body.addEventListener('mousemove', (e) => {
    if (!isActive) {
      return;
    }

    let x = e.pageX;
    x -= comparison.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });

  /* For mobile */

  change.addEventListener('touchstart', () => {
    isActive = true;
  });

  body.addEventListener('touchend', () => {
    isActive = false;
  });

  body.addEventListener('touchcancel', () => {
    isActive = false;
  });

  body.addEventListener('touchmove', (e) => {
    if (!isActive) {
      return;
    }

    let x;
    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= comparison.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });

}

comparisonImg();
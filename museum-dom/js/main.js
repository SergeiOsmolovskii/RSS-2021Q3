
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
  img.classList.add('gallery-img');
  pictureInnerContainer.append(img);
})

const gallerySection = document.querySelector('.gallery')
const galleryImgs = document.querySelectorAll('.gallery-img');

function checkSlide() {
  galleryImgs.forEach(img => {
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
    const imageBottom = gallerySection.offsetTop + img.offsetTop + img.height;
    const isHalfShown = slideInAt > gallerySection.offsetTop + img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide);

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


/* Video */


const progress = document.querySelectorAll('.control-input');
const video = document.querySelector('.video-player');
const videoPlayerBlock = document.querySelector('.video-player-block');
const play = document.querySelector('.play-button');
const mainPlay = document.querySelector('.main-play-button');
const videoLengthControl = document.querySelector('.video-length-control');
const videoSoundControl = document.querySelector('.video-sound-control');
const soundButton = document.querySelector('.sound-button');
const fullScreen = document.querySelector('.full-screen-button');
const mainVideo = document.querySelector('.main-video');

progress.forEach(item =>item.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4)`;
}))

function togglePlayClases() {
    play.classList.toggle('pause-button');
    play.classList.toggle('play-button');
    mainPlay.classList.toggle('main-play-button');
    mainPlay.classList.toggle('main-pause-button');
}

function togglePlay() {
    if (video.paused) {
        video.play();
        togglePlayClases();
    } else {
        video.pause();
        togglePlayClases();
    }
}

let isFullScreen = false;
function toggleFullscreen() {
	if (isFullScreen == false) {
		mainVideo.webkitRequestFullScreen();
        isFullScreen = true;
	}
    if (isFullScreen == true) {
        document.webkitExitFullscreen();
        isFullScreen = false;
    }
    mainVideo.classList.toggle('main-video-fullscreen')
}

function changeVolume() {
    video.volume = videoSoundControl.value / 100;
    if (video.volume === 0) soundButton.classList.toggle('sound-mute');
    else soundButton.classList.remove('sound-mute');
}

function mute() {
    soundButton.classList.toggle('sound-mute');
    if (soundButton.classList.contains ('sound-mute')) {
        video.volume = 0;
        videoSoundControl.value = 0;
        videoSoundControl.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4)`;
    } else {
        video.volume = 0.5;
        videoSoundControl.value = 50;
        videoSoundControl.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4)`;
    }
}

function videoPprogress() {
    const percent = Math.floor((video.currentTime / video.duration) * 100);
    videoLengthControl.value = percent;
    videoLengthControl.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4)`;
    if (video.ended) {
      video.currentTime = 0;
      togglePlayClases();
    }
}

function changeProgressBar(e) {
    const time = (e.offsetX / videoLengthControl.offsetWidth) * video.duration;
    video.currentTime = time;
    if (video.ended) {
      video.currentTime = 0;
      togglePlayClases();
    }
}  

video.addEventListener('click', togglePlay);
play.addEventListener('click', togglePlay);
mainPlay.addEventListener('click', togglePlay);
fullScreen.addEventListener('click', toggleFullscreen);
document.addEventListener('keyup', (e) => {
    if(e.code === 'KeyF') {
        toggleFullscreen();
    }
})

soundButton.addEventListener('click', mute);
videoSoundControl.addEventListener('change', changeVolume);
videoLengthControl.addEventListener('click', changeProgressBar);

document.addEventListener('keyup', (e) => {
    if(e.code === 'Escape' && isFullScreen == true) {
        videoPlayerBlock.classList.remove('video-player-block-fullscreen');
        videoPlayerBlock.classList.add('video-player-block');
    }
})

video.addEventListener('timeupdate', videoPprogress);
let mousedown = false;

document.onkeydown = function(e){
  if (e.code === 'Space') e.preventDefault();
};

document.addEventListener('keyup', (e) => {
    if(e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
    }
})

document.addEventListener('keyup', (e) => {
    if(e.code === 'KeyM') {
        mute();
    }
})

document.addEventListener('keyup', (e) => {
    if (e.shiftKey && e.code === 'Period') {
        if (video.playbackRate <= 2) video.playbackRate += 0.25;
        else video.playbackRate = 2;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.shiftKey && e.code === 'Comma') {
        if (video.playbackRate <= 0.25) video.playbackRate = 0.25;
        else video.playbackRate -= 0.25;
    }
})

/* More keys */

document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyL') {
        video.currentTime += 10;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyJ') {
        video.currentTime -= 10;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key > '0' && e.key < '9') {
        console.log(e.key);
        video.currentTime = video.duration / 100 * `${e.key}0` ;
    }
})

videoLengthControl.addEventListener('mousemove', (e) => mousedown && changeProgressBar(e));
videoLengthControl.addEventListener('mousedown', () => mousedown = true); 
videoLengthControl.addEventListener('mouseup', () => mousedown = false);  


/* Ticket cost calc */

const calcTotalPrice = () => {

  const ticetTypes = document.getElementsByName('ticket-type');
  const basickTicketsAmount = document.getElementById('amount-basic');
  const seniorTicketAmount = document.getElementById('amount-senior');
  const totalPrice = document.querySelector('.price');
  const permanentTicetPrice = 20;

  if (localStorage.getItem('selectedTicketType') === null) localStorage.setItem('selectedTicketType', permanentTicetPrice);
  basickTicketsAmount.value = localStorage.getItem('basickTicketsAmount') || 1;
  seniorTicketAmount.value = localStorage.getItem('seniorTicketAmount') || 1;

  function selectTicketType() {
    localStorage.setItem('selectedTicketType', this.value);
    recalcPrice();
  }

  ticetTypes.forEach(item => {
    item.onchange = selectTicketType;
    if (localStorage.getItem('selectedTicketType') === item.value) item.checked = true;
  })

  const recalcPrice = () => {
    totalPrice.textContent = (localStorage.getItem('selectedTicketType') * basickTicketsAmount.value + (localStorage.getItem('selectedTicketType') * seniorTicketAmount.value) / 2);
  }

  const ticketPlus = (ticketTypeID, ticketTypeName) => {
    const ticket = document.getElementById(ticketTypeID);
    ticket.previousElementSibling.stepUp();
    localStorage.setItem(ticketTypeName, ticket.previousElementSibling.value);
    recalcPrice();
  }

  const ticketMinus = (ticketTypeID, ticketTypeName) => {
    const ticket = document.getElementById(ticketTypeID);
    ticket.nextElementSibling.stepDown();
    localStorage.setItem(ticketTypeName, ticket.nextElementSibling.value);
    recalcPrice();
  }

  amountBasicPlus.addEventListener('click', () =>  ticketPlus('amountBasicPlus', 'basickTicketsAmount'));
  amountSeniorPlus.addEventListener('click', () =>  ticketPlus('amountSeniorPlus', 'seniorTicketAmount'));
  amountBasicMinus.addEventListener('click', () =>  ticketMinus('amountBasicMinus', 'basickTicketsAmount'));
  amountSeniorMinus.addEventListener('click', () =>  ticketMinus('amountSeniorMinus', 'seniorTicketAmount'));
  recalcPrice();
}

calcTotalPrice();



/* Gallery */
import creatGallery from './moduls/gallery.js';
import openForm from './moduls/openForm.js';
import addRippleEffect from './moduls/rippleEffect.js';
import addMobileMenu from './moduls/addMobileMenu.js';
import createIFrame from './moduls/createIFrame.js';
import slider from './moduls/slider.js';
import comparisonSlider from './moduls/comparisonSlider.js';
import videoPlay from './moduls/video.js';
import calcTotalPrice from './moduls/calcTotalPrice.js';
import setSelectedDate from './moduls/setSelectedDate.js';
import setSelectedTime from './moduls/setSelectedTime.js';
import formValidation from './moduls/formValidation.js';


creatGallery();
openForm();
addRippleEffect();
addMobileMenu();
createIFrame();

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

comparisonSlider();
videoPlay();
calcTotalPrice();
setSelectedDate();
setSelectedTime();
formValidation();
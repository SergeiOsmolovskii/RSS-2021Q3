"use strict"

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
    const slides = document.querySelectorAll(slide);
    const next = document.querySelector(nextSlide);
    const prev = document.querySelector(prevSlide);
    const totalSlides = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    let width = window.getComputedStyle(slidesWrapper).maxWidth;
    const dots = document.querySelectorAll(dot);
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
      totalSlides.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      totalSlides.textContent = slides.length;
      current.textContent = slideIndex;
    }
  
    slides.forEach(slide => slide.style.width = width);
  
    const addZero = () => {
      if (slides.length < 10) current.textContent = `0${slideIndex}`;
      else current.textContent = slideIndex;
    };
  
    const addCurrentDot = () => {
      dots.forEach(dot => dot.classList.remove('square-active'));
      dots[slideIndex - 1].classList.add('square-active');
    };
  
    const toNumber = (param) => +param.replace(/\D/g, "");
  
    next.addEventListener('click', () => {
      console.log(slideIndex)
      if (offset == toNumber(width) * (slides.length - 1)) offset = 0;
      else offset += toNumber(width);
  
      slidesField.style.transform = `translateX(-${offset}px)`;
  
      if (slideIndex == slides.length) slideIndex = 1;
      else slideIndex++;
      
      addZero();
      addCurrentDot();
    });
  
    prev.addEventListener('click', () => {
      console.log(slideIndex)
  
      if (offset == 0) offset = toNumber(width) * (slides.length - 1);
      else offset -= toNumber(width);
        
      slidesField.style.transform = `translateX(-${offset}px)`;
  
      if (slideIndex == 1) slideIndex = slides.length;
      else slideIndex--;
      
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

  export default slider;
"use strict"
import {currentTimeOfDay} from './time.js';
import flickr from './flickrAPI.js';
import unsplash from './unsplashAPI.js';

export const backgroundImage = document.body;
export const minSliderIndex = 1;
export const maxSliderIndex = 20;
    let currentSlideIndex = 0;

    const slidePrev = document.querySelector('.slide-prev');
    const slideNext = document.querySelector('.slide-next');

function setBackgroundImage() {  
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/assets/images/${currentTimeOfDay}/${currentSlideIndex < 10 ? `0${currentSlideIndex}` : currentSlideIndex}.jpg`;
    img.onload = () => {      
        backgroundImage.style.backgroundImage = `url(https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/assets/images/${currentTimeOfDay}/${currentSlideIndex < 10 ? `0${currentSlideIndex}` : currentSlideIndex}.jpg)`;
    }; 
}

export function addBackgroundImageFromGitHub(minSliderIndex, maxSliderIndex) {
    function getRandom(minSliderIndex, maxSliderIndex) {
        let min = Math.ceil(minSliderIndex);
        let max = Math.floor(maxSliderIndex);
        currentSlideIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandom(minSliderIndex, maxSliderIndex);
    setBackgroundImage();
    backgroundImage.style.backgroundSize = 'cover';
}

slidePrev.addEventListener('click', () => {
    let tag = localStorage.getItem('selectedTag');
    if (localStorage.getItem('selectedPictureAPI') === 'Unsplash') {
        unsplash(tag);
    } else if (localStorage.getItem('selectedPictureAPI') === 'Flickr') {
        flickr(tag);
    } else {
        currentSlideIndex = currentSlideIndex - 1; 
        if (currentSlideIndex < minSliderIndex) currentSlideIndex = maxSliderIndex; 
        setBackgroundImage();
        backgroundImage.style.backgroundSize = 'cover';
    }
})

slideNext.addEventListener('click', () => {
    let tag = localStorage.getItem('selectedTag');
    if (localStorage.getItem('selectedPictureAPI') === 'Unsplash') {
        unsplash(tag);
    } else if (localStorage.getItem('selectedPictureAPI') === 'Flickr') {
        flickr(tag);
    } else {
        currentSlideIndex = currentSlideIndex + 1; 
        if (currentSlideIndex > maxSliderIndex) currentSlideIndex = minSliderIndex; 
        setBackgroundImage();
        backgroundImage.style.backgroundSize = 'cover';
    }
})

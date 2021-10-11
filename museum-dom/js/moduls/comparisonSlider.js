"use strict"


function comparisonSlider() {
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

export default comparisonSlider;

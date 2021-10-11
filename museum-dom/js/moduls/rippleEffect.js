"use strict"

const bookBtn = document.querySelector('.book-btn');
const addRippleEffect = () => {
    bookBtn.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        const circle = document.createElement('span');
        
        circle.classList.add('circle');
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
    })   
}

export default addRippleEffect;
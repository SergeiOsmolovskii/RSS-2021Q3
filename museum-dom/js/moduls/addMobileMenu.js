"use strict"

const addMobileMenu = () => {
    const link = document.querySelector('.menu-link');
    const mobileMenu = document.querySelector('.mobile-menu');
    const greetings = document.querySelector('.greetings');
    const relative = document.querySelector('.relative');
    
    const addMenu = () => {
        const screenWidth = window.screen.width;
        mobileMenu.classList.toggle('mobile-menu_active');
        link.classList.toggle('menu-link_active');
        if (screenWidth <= 768) relative.classList.toggle('opacity')  
        else if (screenWidth > 768) greetings.classList.toggle('opacity');
    }
    link.addEventListener('click', addMenu);
}

export default addMobileMenu;
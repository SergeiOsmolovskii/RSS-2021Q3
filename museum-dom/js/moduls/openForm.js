"use strict"

const discoverBtn = document.querySelector('.discover-btn');

const openForm = () => {
    
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
}

  discoverBtn.addEventListener('click', function() {
    window.open('./tours/tour1.html', '_blank');
  })

  export default openForm;
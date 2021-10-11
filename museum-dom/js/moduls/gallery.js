"use strict"

const creatGallery = () => {
    const pictureInnerContainer = document.querySelector('.picture-inner-container');
    const gallerySection = document.querySelector('.gallery')
    const galleryImgs = document.querySelectorAll('.gallery-img');
    let imgCount = 15;
    let imgArr = [...Array(+`${imgCount}`).keys()].map(item => item +1);

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    shuffle(imgArr);

    imgArr.map(item => {
        const img = document.createElement('img');      
        img.src = `./assets/img/gallery/galery${item}.jpg`;
        img.alt = `galery${item}`;
        img.classList.add('gallery-img');
        pictureInnerContainer.append(img);
    })
    
    function checkSlide() {
        galleryImgs.forEach(img => {
            const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
            const imageBottom = gallerySection.offsetTop + img.offsetTop + img.height;
            const isHalfShown = slideInAt > gallerySection.offsetTop + img.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;
            
            if (isHalfShown && isNotScrolledPast) img.classList.add('active');
            else img.classList.remove('active');
        });
    }
    window.addEventListener('scroll', checkSlide);
}
creatGallery();

export default creatGallery;
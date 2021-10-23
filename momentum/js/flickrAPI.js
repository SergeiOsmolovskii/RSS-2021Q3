"use strict"

export default async function flickr(tag) {
    console.log(tag)
    const backgroundImage = document.body;

    const METHOD = 'flickr.photos.search'
    const API_KEY = '76e32d3b0dacc597019bd1f2c3167170';

    function getRandom(minSliderIndex, maxSliderIndex) {
        let min = Math.ceil(minSliderIndex);
        let max = Math.floor(maxSliderIndex);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomImg = getRandom(1, 100);
    let randomPage = getRandom(1, 100);

    const url = `https://www.flickr.com/services/rest/?method=${METHOD}&api_key=${API_KEY}&tags=${tag}&extras=url_h&format=json&nojsoncallback=1&&per_page=100&page=${randomPage}`;
    const res = await fetch(url);
    const data = await res.json();

    function setBackgroundImage() {
        const img = new Image();
        img.src = data.photos.photo[randomImg].url_h;
        img.onload = () => {
            backgroundImage.style.backgroundImage = `url(${data.photos.photo[randomImg].url_h}`;
        };
    }
    setBackgroundImage();
}
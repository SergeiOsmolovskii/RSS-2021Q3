"use strict"

export default async function (tag) {
const backgroundImage = document.body;

        const url = `https://api.unsplash.com/photos/random?query=${tag}&client_id=4ucyiLoUm51SOYJvyfyvBy4Jg-fAIpVDXDvwS1M8PE0`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.urls.regular)

        function setBackgroundImage() {  
            const img = new Image();
            img.src = data.urls.regular;
            img.onload = () => {      
                backgroundImage.style.backgroundImage = `url(${data.urls.regular}`;
            }; 
          }


        setBackgroundImage();
}
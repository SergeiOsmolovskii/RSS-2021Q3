"use strict"

const createIFrame = () => {
    const findVideos = () => {
        let videos = document.querySelectorAll('.video-slide');
        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    const setupVideo = (video) => {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video-button');
        let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe(id);
            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    const parseMediaURL = (media) => {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/(maxresdefault|hqdefault)\.jpg|webp/i;
        let url = media.src;
        let match = url.match(regexp);
        return match[1];
    }

    const createIframe = (id) => {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');
        console.log(id)
        return iframe;
    }

    const generateURL = (id) => {
        let query = '?rel=0&showinfo=0&autoplay=1';
        return 'https://www.youtube.com/embed/' + id + query;
    }
    findVideos();
}

export default createIFrame;
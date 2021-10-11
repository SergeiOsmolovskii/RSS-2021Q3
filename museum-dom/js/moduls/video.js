"use strict"


const progress = document.querySelectorAll('.control-input');
const video = document.querySelector('.video-player');
const videoPlayerBlock = document.querySelector('.video-player-block');
const play = document.querySelector('.play-button');
const mainPlay = document.querySelector('.main-play-button');
const videoLengthControl = document.querySelector('.video-length-control');
const videoSoundControl = document.querySelector('.video-sound-control');
const soundButton = document.querySelector('.sound-button');
const fullScreen = document.querySelector('.full-screen-button');
const mainVideo = document.querySelector('.main-video');

const videoPlay = () => {

    progress.forEach(item => item.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4)`;
    }))

    function togglePlayClases() {
        play.classList.toggle('pause-button');
        play.classList.toggle('play-button');
        mainPlay.classList.toggle('main-play-button');
        mainPlay.classList.toggle('main-pause-button');
    }

    function togglePlay() {
        if (video.paused) {
            video.play();
            togglePlayClases();
        } else {
            video.pause();
            togglePlayClases();
        }
    }

    let isFullScreen = false;

    function toggleFullscreen() {
        if (isFullScreen == false) {
            mainVideo.webkitRequestFullScreen();
            isFullScreen = true;
        }
        if (isFullScreen == true) {
            document.webkitExitFullscreen();
            isFullScreen = false;
        }
        mainVideo.classList.toggle('main-video-fullscreen')
    }

    function changeVolume() {
        video.volume = videoSoundControl.value / 100;
        if (video.volume === 0) soundButton.classList.toggle('sound-mute');
        else soundButton.classList.remove('sound-mute');
    }

    function mute() {
        soundButton.classList.toggle('sound-mute');
        if (soundButton.classList.contains('sound-mute')) {
            video.volume = 0;
            videoSoundControl.value = 0;
            videoSoundControl.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4)`;
        } else {
            video.volume = 0.5;
            videoSoundControl.value = 50;
            videoSoundControl.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4)`;
        }
    }

    function videoPprogress() {
        const percent = Math.floor((video.currentTime / video.duration) * 100);
        videoLengthControl.value = percent;
        videoLengthControl.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4)`;
        if (video.ended) {
            video.currentTime = 0;
            togglePlayClases();
        }
    }

    function changeProgressBar(e) {
        const time = (e.offsetX / videoLengthControl.offsetWidth) * video.duration;
        video.currentTime = time;
        if (video.ended) {
            video.currentTime = 0;
            togglePlayClases();
        }
    }

    video.addEventListener('click', togglePlay);
    play.addEventListener('click', togglePlay);
    mainPlay.addEventListener('click', togglePlay);
    fullScreen.addEventListener('click', toggleFullscreen);
    document.addEventListener('keyup', (e) => {
        if (e.code === 'KeyF') {
            toggleFullscreen();
        }
    })

    soundButton.addEventListener('click', mute);
    videoSoundControl.addEventListener('change', changeVolume);
    videoLengthControl.addEventListener('click', changeProgressBar);

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape' && isFullScreen == true) {
            videoPlayerBlock.classList.remove('video-player-block-fullscreen');
            videoPlayerBlock.classList.add('video-player-block');
        }
    })

    video.addEventListener('timeupdate', videoPprogress);
    let mousedown = false;

    document.onkeydown = function (e) {
        if (e.code === 'Space') e.preventDefault();
    };

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            togglePlay();
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.code === 'KeyM') {
            mute();
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.shiftKey && e.code === 'Period') {
            if (video.playbackRate <= 2) video.playbackRate += 0.25;
            else video.playbackRate = 2;
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.shiftKey && e.code === 'Comma') {
            if (video.playbackRate <= 0.25) video.playbackRate = 0.25;
            else video.playbackRate -= 0.25;
        }
    })

    /* More keys */

    document.addEventListener('keyup', (e) => {
        if (e.code === 'KeyL') {
            video.currentTime += 10;
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.code === 'KeyJ') {
            video.currentTime -= 10;
        }
    })

    document.addEventListener('keyup', (e) => {
        if (e.key > '0' && e.key < '9') {
            video.currentTime = video.duration / 100 * `${e.key}0`;
        }
    })

    videoLengthControl.addEventListener('mousemove', (e) => mousedown && changeProgressBar(e));
    videoLengthControl.addEventListener('mousedown', () => mousedown = true);
    videoLengthControl.addEventListener('mouseup', () => mousedown = false);

}

export default videoPlay;

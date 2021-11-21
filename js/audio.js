const audioPlay = (clcikType) => {
    const audio = new Audio();
    audio.src = `./assets/sound/${clcikType}.mp3`;
    audio.volume = +localStorage.getItem('soundLeavel') / 100;
    audio.play();
}

export default audioPlay;

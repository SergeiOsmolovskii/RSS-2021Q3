const src = '../../assets/sound/audio.mp3';
const audio = new Audio();
audio.src = src;

export const audioStartSetting = async () => {
  let isPlay = localStorage.getItem('isPlay');
  if (isPlay === 'true') {
    audio.play();
  }
  audio.onended = function () {
    audio.play();
  }
}

export const playAudio = async () => {
  let isPlay = localStorage.getItem('isPlay');
  const soundButton = document.querySelector('.settings__sound')!;
    if (isPlay === 'false') {
      audio.play();
      isPlay = 'true';
      localStorage.setItem('isPlay', 'true');
      soundButton.classList.remove('settings__sound--mute');
  } else {
      audio.pause();
      isPlay = 'false';
      localStorage.setItem('isPlay', 'false');
      soundButton.classList.add('settings__sound--mute');
  }
  audio.onended = function () {
    audio.play();
  }
}
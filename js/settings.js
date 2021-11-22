const setSettings = () => {
    const timeGame = document.getElementById('timeGame');
    const roundTime = document.getElementById('roundTime');
    const selectedGameTime = document.querySelector('.selected-time');
    const soundLeavel = document.getElementById('soundLeavel');



    const soundButton = document.querySelector('.sound-button');

    if (localStorage.getItem('timeGame') === '' || localStorage.getItem('timeGame') === null) localStorage.setItem(`timeGame`, timeGame.checked);
    if (localStorage.getItem('roundTime') === '' || localStorage.getItem('roundTime') === null) localStorage.setItem(`roundTime`, roundTime.value);
    
    if (localStorage.getItem('soundLeavel') === '' || localStorage.getItem('soundLeavel') === null) localStorage.setItem(`soundLeavel`, soundLeavel.value);
    
    if (localStorage.getItem('timeGame')) timeGame.checked = JSON.parse(localStorage.getItem('timeGame'));

    const selectedTime = localStorage.getItem('roundTime');
    selectedGameTime.textContent = selectedTime;
    roundTime.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${+selectedTime * 3.33}%, #C4C4C4 ${+selectedTime * 3.33}%, #C4C4C4)`;

    const selectedSoundLeavel = localStorage.getItem('soundLeavel');
    soundLeavel.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${selectedSoundLeavel}%, #C4C4C4 ${selectedSoundLeavel }%, #C4C4C4)`;

    if (localStorage.getItem('soundLeavel') == 0) {
        soundButton.classList.add('sound-mute');
    }



    timeGame.addEventListener('change', () => {
        let home = document.querySelector('.home');
            if (home == null) {
                localStorage.setItem(`timeGame`, timeGame.checked);
            } 
            if (home != null) {
                timeGame.checked = JSON.parse(localStorage.getItem(`timeGame`));
            }
    });

    roundTime.addEventListener('change', function () {

        let home = document.querySelector('.home');
        if (home == null) {
            const value = this.value;
            localStorage.setItem(`roundTime`, roundTime.value);
            selectedGameTime.textContent = value;
            this.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${value * 3.33}%, #C4C4C4 ${value * 3.33}%, #C4C4C4)`;
        }

        if (home != null) {
            const value = localStorage.getItem(`roundTime`);
            selectedGameTime.textContent = value;
            this.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${value * 3.33}%, #C4C4C4 ${value * 3.33}%, #C4C4C4)`;
        }

    });

    soundLeavel.addEventListener('change', function () {
        const value = this.value;
        if (soundLeavel.value > 0) soundButton.classList.remove('sound-mute');
        if (soundLeavel.value == 0) soundButton.classList.add('sound-mute');
        localStorage.setItem(`soundLeavel`, soundLeavel.value);
        this.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c ${value}%, #C4C4C4 ${value}%, #C4C4C4)`;
    });

    const mute = () => {
        soundButton.classList.toggle('sound-mute');
        if (soundButton.classList.contains('sound-mute')) {
            //audio.volume = 0;
            soundLeavel.value = 0;
            soundLeavel.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c 0%, #C4C4C4 0%, #C4C4C4)`;
            localStorage.setItem(`soundLeavel`, soundLeavel.value);
        } else {
            //audio.volume = 0.5;
            soundLeavel.value = 50;
            soundLeavel.style.background = `linear-gradient(to right, #fd1c1c 0%, #fd1c1c 50%, #C4C4C4 50%, #C4C4C4)`;
            localStorage.setItem(`soundLeavel`, soundLeavel.value);
        }
    }

    soundButton.addEventListener('click' , mute)
}

export default setSettings;
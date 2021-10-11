"use strict"

const setSelectedTime = () => {
    const selectedTime = document.querySelector('.selected-time');
    const addedTime = document.querySelector('.added-time');

    function showSelectedTime() {
        addedTime.textContent = selectedTime.value;
    }
    selectedTime.addEventListener('change', showSelectedTime);
}

export default setSelectedTime;
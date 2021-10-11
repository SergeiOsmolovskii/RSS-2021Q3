"use strict"

const setSelectedDate = () => {
    const selectedDate = document.querySelector('.selected-date');
    const addedDate = document.querySelector('.added-date');
    const now = new Date;
    const day = now.getDate();
    const year = now.getFullYear();
    const month = now.getMonth();
    const currentDate = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${day < 10 ? `0${day}` : day}`;

    selectedDate.setAttribute('min', currentDate);

    function showSelectedDate() {
        const date = selectedDate.valueAsDate;
        const options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timeZone: 'UTC'
        };
        const currentDate = date.toLocaleDateString('en-Br', options);
        addedDate.textContent = currentDate;
    }
    selectedDate.addEventListener('change', showSelectedDate);
}
export default setSelectedDate;
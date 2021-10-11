"use strict"
const userName = document.querySelector('.your-name');
const userNameInput = document.querySelector('.your-name input');
const userMail = document.querySelector('.your-email');
const userMailInput = document.querySelector('.your-email input');
const userTel = document.querySelector('.your-phone');
const userTelInput = document.querySelector('.your-phone input');
const regName = new RegExp('^[A-Za-zА-Яа-я0-9 *]{3,15}$');
const regMail = new RegExp('^[A-Za-z0-9._%+-]{3,15}@[A-Za-z0-9.-]{4,}\.[A-Za-z]{2,4}$');
const regTel = /^\d[\d\(\)\ -]{4,10}\d$/;

const formValidation = () => {

    const checkName = () => {
        if (!regName.test(userNameInput.value)) {
            userName.classList.add('notValid');
            userNameInput.classList.add('notValid');
        } else {
            userName.classList.remove('notValid');
            userNameInput.classList.remove('notValid');
        }
    }

    const checkMail = () => {
        if (!regMail.test(userMailInput.value)) {
            userMail.classList.add('notValid');
            userMailInput.classList.add('notValid');
        } else {
            userMail.classList.remove('notValid');
            userMailInput.classList.remove('notValid');
        }
    }

    const checkTel = () => {
        if (!regTel.test(userTelInput.value)) {
            userTel.classList.add('notValid');
            userTelInput.classList.add('notValid');
        } else {
            userTel.classList.remove('notValid');
            userTelInput.classList.remove('notValid');
        }
    }

    userName.addEventListener('change', checkName);
    userMail.addEventListener('change', checkMail);
    userTel.addEventListener('change', checkTel);
}

export default formValidation;
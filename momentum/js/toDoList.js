"use strict"

export default function toDo() {
    const toDoListButton = document.querySelector('.to-do-list-button');
    const toDoList = document.querySelector('.to-do-list');
    const addNewJob = document.querySelector('.add-new-job');
    const listUl = document.querySelector('.list');
    let jobs;

    if (localStorage.getItem('addedJobs')) listUl.innerHTML = localStorage.getItem('addedJobs');

    function openToDoList(e) {
        if (e.target === toDoListButton) {
            toDoListButton.classList.toggle('to-do-list-active');
            toDoList.classList.toggle('to-do-active');
        }
    }

    function addToLocalStorage() {
        jobs = listUl.innerHTML;
        localStorage.setItem('addedJobs', jobs);
    }

    function addNewElement() {
        let li = document.createElement('li');
        let inputValue = document.getElementById('toDoInput').value;
        li.textContent = inputValue;
        if (inputValue !== "") document.querySelector('.list').append(li);
        document.getElementById('toDoInput').value = '';

        let button = document.createElement('button');
        button.classList.add('job-list-close');
        li.append(button);
        addToLocalStorage();
    }

    function removeItem(e) {
        if (e.target.tagName === "LI") e.target.classList.toggle('done');
        if (e.target.tagName === "BUTTON") e.target.parentNode.remove();
        addToLocalStorage();
    }

    listUl.addEventListener('click', removeItem);
    toDoListButton.addEventListener('click', openToDoList);
    addNewJob.addEventListener('click', addNewElement);
}
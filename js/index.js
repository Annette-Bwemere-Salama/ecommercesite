const login = document.querySelector('.login');
const questions = document.querySelector('.questions');
const questionForm = document.querySelector('.questionForm');
console.log(login, questions)

const loginForm = document.querySelector('.loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    questions.style.display = 'block'
    login.style.display = 'none'
});

const containeResults = document.querySelector('#containeResults');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    containeResults.style.display = 'block'
    questions.style.display = 'none'
    console.log(containeResults, questionForm);
});

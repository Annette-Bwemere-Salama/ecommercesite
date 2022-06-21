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

const containerQuestions01 = document.querySelector('.questions01');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    containerQuestions01.style.display = 'block'
    console.log(containerQuestions01);
    questions.style.display = 'none'
})

const questions02 = document.querySelector('.questions02');
//on capte l'evenement
containerQuestions01.addEventListener('submit', (e) => {
    //annulation du comportement par defaut
    e.preventDefault()
    //on annule le display none pour dire l'affichage de l'element question02
    questions02.style.display = 'block'
    // On cache l'element containerQuestion01
    containerQuestions01.style.display = 'none'
    console.log(questions02);
})

const questions3 = document.querySelector('.questions03');
questions02.addEventListener('submit', (e) => {
    e.preventDefault()
    questions3.style.display = 'block'
    questions02.style.display = 'none'
    console.log(questions3);
})

const questions04 = document.querySelector('.questions04');
questions3.addEventListener('submit', (e) => {
    e.preventDefault()
    questions04.style.display = 'block'
    questions3.style.display = 'none'
    console.log(questions04);
})

const question05 = document.querySelector('.questions05')
questions04.addEventListener('submit', (e) => {
    e.preventDefault()
    question05.style.display = 'block'
    questions04.style.display = 'none'
    console.log(question05);
})

const question06 = document.querySelector('.questions06');
question05.addEventListener('submit', (e) => {
    e.preventDefault()
    question06.style.display = 'block'
    question05.style.display = 'none'
    console.log(question06);
})

const question07 = document.querySelector('.questions07')
question06.addEventListener('submit', (e) => {
    e.preventDefault()
    question07.style.display = 'block'
    question06.style.display = 'none'
    console.log(question07);
})

const questions08 = document.querySelector('.questions08')
question07.addEventListener('submit', (e) => {
    e.preventDefault()
    questions08.style.display = 'block'
    question07.style.display = 'none'
    console.log(questions08);
})

const questions09 = document.querySelector('.questions09')
questions08.addEventListener('submit', (e) => {
    e.preventDefault()
    questions09.style.display = 'block'
    questions08.style.display = 'none'
    console.log(questions09);
})


const questions10 = document.querySelector('.questions10')
questions09.addEventListener('submit', (e) => {
    e.preventDefault()
    questions10.style.display = 'block'
    questions09.style.display = 'none'
    console.log(questions10);
})

const questions11 = document.querySelector('.questions11')
questions10.addEventListener('submit', (e) => {
    e.preventDefault()
    questions11.style.display = 'block'
    questions10.style.display = 'none'
    console.log(questions11);
})


/*const containeResults = document.querySelector('#containeResults');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    containeResults.style.display = 'block'
    questions.style.display = 'none'
    console.log(containeResults, questionForm);
});
*/

const themeBtn = document.getElementById('theme-btn')
const body = document.querySelector("body")
const header = document.querySelector("#header")

themeBtn.addEventListener('dblclick', (event) => {
    toggleTheme()
    console.log(event.target)
})

let mode = 'light'
function toggleTheme(){
    if(mode === 'light') {
        body.style.backgroundColor = '#444'
        header.style.backgroundColor = 'black'
        mode = 'dark'
    }
    else {
        body.style.backgroundColor = 'white'
        header.style.backgroundColor = 'lightgrey'
        mode = 'light'
    }
}

// 2nd CASE with Inputs


const menu = document.querySelector('.menu')
const mobileDropdown = document.querySelector('.mobile-dropdown')

menu.addEventListener('click', () => {
    mobileDropdown.classList.toggle('hidden')
})


// GETTIN GUSER INPUT FROM FORM

const userForm = document.querySelector('.user-form')
const userDisplayContainer = document.querySelector('.user-display')

let userData = {}

function createCard(fullname, age, email){
    if(!fullname || !age || !email) {
        alert("Please enter info in the form")
        return
    }

    const cardTemplate = 
        `<article class="card">
            <h2>${fullname}</h2>
            <h5>${age} years old</h5>
            <p>${email}</p>
        </article>`

    userDisplayContainer.innerHTML = userDisplayContainer.innerHTML + cardTemplate
}

userForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const formData = new FormData(userForm)

    for(let [key, value] of formData){
        userData[key] = value
    }


    createCard(userData.fullname, userData.age, userData.email)
})
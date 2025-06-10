
// Target the elements
const welcomeEl = document.getElementById("h001")
const changeBtn = document.getElementById("change-btn")
const clearBtn = document.getElementById("clear-btn")
const toggleBtn = document.getElementById("toggle-btn")
let input = "Some text"

function changeAppearance(){
    welcomeEl.classList.add("myStyle")
}

function clearStyles(){
    welcomeEl.classList.remove("myStyle")
}

function toggleStyles(){
    welcomeEl.classList.toggle("myStyle")
}

function magnify(placeholder){
    placeholder.classList.toggle("magnify")
}

function changeTxt(element, txt){
    element.innerText = txt
}

// Listen for events over these elements
changeBtn.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    magnify(changeBtn)
})

changeBtn.addEventListener("click", (event) => {
    changeAppearance()
    changeTxt(welcomeEl, "I changed this text")
    changeTxt(changeBtn, "Appearance Changed")
})

clearBtn.addEventListener("click", (event) => {
    clearStyles()
})

toggleBtn.addEventListener("click", toggleStyles)


// welcomeEl.style.backgroundColor = "red"
// welcomeEl.style.padding = "1em"
// welcomeEl.style.border = "2px solid black"

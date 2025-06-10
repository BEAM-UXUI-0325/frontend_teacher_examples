
const colors = ["red", "white", "yellow", "orange", "blue"]
// Task1: Print every value in console
// colors.forEach(function(item){
//     console.log(item)
// })

colors.push("grey", "pink")
colors.unshift("purple", "beige")
colors.push("yellow")
// Task2: 
// colors.forEach((item)=>{
//     console.log(item)
// })

// const result = colors.includes("black")
// const copy1 = colors.slice(-3)
// const copy2 = colors.slice(0, 3)
// const combinedColors = copy1.concat(copy2)
// console.log(combinedColors);
// console.log(colors.lastIndexOf("yellow"))
// console.log(colors.indexOf("yellow") !== colors.lastIndexOf("yellow"));
// let result = colors.filter(color => color === "yellow").length
// console.log(result)

// let count = 0
// for(let color of colors) if(color === "yellow") count++

// console.log(count)


const user = {
    firstname: "Nurudeen",
    lastname: "Hanafi",
    age: 42,
    email:"hanolf4real@gmail.com" 
}

user.email // dot-notation
user["email"] // bracket-notation


const keys = Object.keys(user)
// console.log(keys.length)


// for(let [key, value] of Object.entries(user)){
//     console.log(key, value)
// }

user.status = "Married"
delete user.email
// console.log(user)





let text = "heeLLo woRld"

function capitalize(txt){
    if(typeof txt !== "string"){
        console.warn("You are trying to capitalize a non-string input")
        return txt
    }
    // Step 1: split the first letter
    let start = txt.substring(0, 1)
    // Step 2: split the rest of the text without the first letter
    let rest = txt.substring(1)
    // Step 3: make first letter toUpperCase
    let upper = start.toUpperCase()
    // Step 4: make the rest of the text toLowerCase
    let lower = rest.toLowerCase()
    // Step 5: merge/concat the text back
    let concated = upper.concat(lower)
    // Step 6: return the transformed text (capitalized text)
    return concated
}

const result = capitalize([])

console.log(result)


// function capitalize(txt){
//     let start = txt.substring(0, 1)
//     let rest = txt.substring(1)
//     return start.toUpperCase().concat(rest.toLowerCase())
// }


const DOM = {
    name: "Document",
    attribute: null,
    text: null,
    children: [{
        name: "html",
        attribute: null,
        text: null,
        children: [{
            name: "head",
            attribute: null,
            text: null,
            children: []
        }, {
            name: "body",
            attribute: null,
            text: null,
            children: []
        }]
    }]
}
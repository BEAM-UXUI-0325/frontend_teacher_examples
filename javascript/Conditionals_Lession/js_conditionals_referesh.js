
let x = 4

x > 0 && x <= 10 && x%2===0
x > 10 || x === 7 || x%2===0

//Conditionals
let y = x > 0 ? "Great" : "Ouch"

if(x > 0 && x <= 10 && x%2===0){
    console.log("Hello")
}
else{
    console.log("Goodbye")
}

if(x > 10 || x === 7 || x%2===0){
    console.log("Hello")
}
else if(x === 45){
    
}
else{
    console.log("Goodbye")
}

let partOfDay = "noon"

switch(partOfDay){
    case "morning": console.log("Good Morning")
    break
    case "noon": console.log("Good Afternoon")
    break
    case "evening": console.log("Good Evening")
    break
    case "night": 
    case "midnight": console.log("Good Night")
    break
    default: console.log("Hello")
}


// with help of if else check if the person can vote or not
let age = 0



// the voter has to belong to the country and be in legal age
let age2 = 0
let nationality = "x"
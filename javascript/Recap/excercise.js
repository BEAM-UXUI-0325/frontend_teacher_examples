
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



const keys = Object.keys(user)
console.log(keys.length)


// for(let [key, value] of Object.entries(user)){
//     console.log(key, value)
// }

user.status = "Married"
delete user.email
console.log(user)
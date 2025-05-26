
for(let a = 0; a < 10; a++){
    console.log("Hi")
}

let userInteraction = true

// let x = 0
while(!userInteraction){
    console.log(x + " Bye")
    // x++
}

let y = 0
do {
    console.log(y + " Hello")
    y++
}
while(y < 0)

// const cars = ["Audi", "WV", "BMW", "Fiat", "Benz", "Peugeot", "Citroen"] 
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }
// for(let car of cars){
//     console.log(car)
// }

const hobbies = ["driving", "riding", "hiking", "sailing"]
for(let hobby of hobbies){
    console.log(hobby)
}


const students = ["Marco", "Nur", "Albert", "Saylee", "Amir"]

// for(let student of students){
//     console.log(student)
// }

// students.forEach((student) => {
//     console.log(student)
// })

// const transformedData = students.map((student, index) => index + " Hi " + student.toUpperCase())

// Transform array data with map() loop
// const copy = students.map((student, index) => {
//     if(student.startsWith("A")) {
//         return "Hello " + student
//     }

//     return "Hi " + student
// })

// for(let student of copy){
//     console.log(student)
// }

// Excericse // Exchange Rate is 1GBP = 1.19EUR

const salesGBP = [10, 22.5, 100, 50, 108.79, 22, 33.35, 12]

let total = 0
for(let value of salesGBP){
    total = total + value
}

const salesEUR = salesGBP.map((value) => value*1.19)

let totalInEuro = 0
for(let value of salesEUR){
    totalInEuro = totalInEuro + value
}
// const students = ["Marco", "Nur", "Albert", "Saylee", "Amir"]
// student.startsWith()
const filtered = salesGBP.filter((value) => value < 50)

// console.log("Total Sales for today: " + salesGBP.length + " products")
// console.log("Total money: "+ total.toFixed(2) + "GBP")
// console.log("List in EURO: ", salesEUR)
// console.log("Total money: "+ totalInEuro.toFixed(2) + "EUR")
// console.log("List of product less than 50GBP: "+ filtered.length + " products")

const list = [67, 8, 5, 35, 2, 40, 38, 13, 19, 11, 80, 85, 50, 55, 28, 30, 17]


// Find the average age
let totalAge = 0

for(let age of list){
    totalAge = totalAge + age
}

let average = total / list.length
console.log("Average age of customers is: ", average.toFixed(1))
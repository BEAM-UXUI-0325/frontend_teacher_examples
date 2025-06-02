
// const fruits = [
//     {
//         name: "apple", 
//         stock: 40, 
//         unit: "pieces", 
//         sales: 10
//     },
//     {
//         name: "orange", 
//         stock: 30, 
//         unit: "pieces", 
//         sales: 50
//     },
//     {
//         name: "mango", 
//         stock: 0, 
//         unit: "pieces", 
//         sales: 12
//     },
//     {
//         name: "tomato", 
//         stock: 25, 
//         unit: "kg", 
//         sales: 5
//     }
// ]

// let userSelection = "apple"
// let quantity = 20

// const foundFruit = fruits.find(fruit => fruit.name === userSelection)

// if(!foundFruit) {
//     console.log("You chose:", userSelection)
//     console.log("However this selected fruit doesn't exists in the Database")
//     return
// }

// if(quantity > foundFruit.stock) {
//     console.log("You cannot order more than it's available")
//     console.log("You are ordering:", quantity, foundFruit.unit, "however stock is:", foundFruit.stock, foundFruit.unit)
//     return
// }

// if(!foundFruit || quantity > foundFruit.stock) {
//     console.log("You cannot place this order,check the selected fruit and quantity")
//     return
// }


// if(foundFruit && quantity <= foundFruit.stock){
//     foundFruit.stock = foundFruit.stock - quantity
//     console.log("Order placed successfully")
// }
// else {
//     console.log("You cannot place this order,check the selected fruit and quantity")
// }


//=============================================================//
//========== ABOVE WE ANSWERED TO LOGICAL OPERATORS ===========//
//=============================================================//

// NUMBERS

let x = 30.147665
let y = 3.395665
// Arithmetics
let result1 = x + y
let result2 = x - y
let result3 = x * y
let result4 = x / y
let result5 = x ** y
let result6 = x % y

// Comparison
x > y
x < y
x >= y
x <= y
x === y

x.toFixed(4)


const list = [23, 45645, 235, 2376, 236, 647, 3574, 87, 34, 64, 323, 86, 523]

// let res = Math.max(...list)

function random(range){
    let seed = Math.random()
    if(!range) {
        return seed
    }
    return Math.round(seed * range)
}


const myNumber = random()
const otherNumber = random()

console.log(myNumber, otherNumber)
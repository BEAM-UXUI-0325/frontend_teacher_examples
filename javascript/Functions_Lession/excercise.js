const salesData = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    sales: 150,
    stock: 45,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    sales: 300,
    stock: 120,
    category: "Clothing"
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    sales: 120,
    stock: 0,
    category: "Home & Kitchen"
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 129.99,
    sales: 80,
    stock: 25,
    category: "Electronics"
  },
  {
    id: 5,
    name: "Yoga Mat Premium",
    price: 45.00,
    sales: 200,
    stock: 75,
    category: "Sports & Fitness"
  },
  {
    id: 6,
    name: "Coffee Bean Grinder",
    price: 75.50,
    sales: 90,
    stock: 30,
    category: "Home & Kitchen"
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    price: 32.99,
    sales: 60,
    stock: 0,
    category: "Home & Office"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 110.00,
    sales: 170,
    stock: 85,
    category: "Sports & Fitness"
  },
  {
    id: 9,
    name: "Smartphone Case",
    price: 15.99,
    sales: 400,
    stock: 200,
    category: "Electronics"
  },
  {
    id: 10,
    name: "Ceramic Dinner Plate Set",
    price: 68.99,
    sales: 50,
    stock: 0,
    category: "Home & Kitchen"
  }
]

const abc = [2, 34, 5, 76, 4364]
const x = []

// GOAL: Calculate Grand Total Earnings
// Given an array with numbers
// Want a function which takes an array as input
// Gives total earnings as output

function calculateEarnings(inputArray){
    if(!Array.isArray(inputArray)){
        console.log("You MUST give an array as input to this function")
        return null
    }

    let grandTotal = 0
    for(let item of inputArray){
        grandTotal = grandTotal + (item.price * item.sales)
    }
    return grandTotal
}

// Create a function called displayStock which you give it an array as input
// and it console logs Name of the Product with Stock next to it
// function doesn't return anything
// 1. Wireless Bluetooth Headphones - 45
// 2. Ceramic Dinner Plate Set - 0


const result = calculateEarnings(salesData)
console.log(result)
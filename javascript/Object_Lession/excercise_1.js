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


// TASK 1: Find the total earnings
let grandTotal = 0
// The Loop
salesData.forEach((item) => {
    let total = item.price * item.sales
    grandTotal = grandTotal + total
})
console.log("Total amount: ", grandTotal, "Euro")

// TASK 2: Print the names of the products that are out of stock
// Products out of stock:
// LED Desk Lamp
// ...
const outOfStock = salesData.filter((item) => item.stock === 0)
console.log("Products out of stock:")
outOfStock.forEach((item, i) => console.log(i+1, item.name))

//  TASK ?: Display the earnings by Category
//  Home & Kitchen: 1400.99
//  Electronics: 8900


// TASK 3: Add 100 units per each product
// for...of
for(let item of salesData) {
    item.stock = item.stock + 100
}


// TASK 4: +100 to every item, however, for electronics add 50 instead, and for clothing add 20 instead
salesData.forEach((item) => console.log(item.name, item.stock))

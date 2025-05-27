
// let number1 = 3456343
// let number2 = 34536343
// let sum1 = number1 + number2

// let number3 = 54646473
// let number4 = 7567345436
// let sum2 = number3 + number4

// let number5 = 945363754
// let number6 = 2467357545
// let sum3 = number5 + number6

// function addNumbers(number1, number2) {
//     let sum = number1 + number2
//     return sum
// }

// const addNumbers = (number1, number2) => {
//     let sum = number1 + number2
//     return sum
// }

// const result = addNumbers(1, 5)
// const result2 = addNumbers(1, 3)

// console.log(result, result2)


const data = [23, 543, 73, 11, 9, 44, 76, 90, 2, 5, 77]

const transformed = data.map(value => value * 3)
const filtered = transformed.filter(value => value < 150)

const users = [
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@gmail.com",
    uid: "uid001",
    status: "active"
  },
  {
    firstName: "Michael",
    lastName: "Chen",
    email: "m.chen@outlook.com",
    uid: "uid002",
    status: "inactive"
  },
  {
    firstName: "Emma",
    lastName: "Rodriguez",
    email: "emma.rodriguez@yahoo.com",
    uid: "uid003",
    status: "active"
  },
  {
    firstName: "David",
    lastName: "Thompson",
    email: "d.thompson@hotmail.com",
    uid: "uid004",
    status: "active"
  },
  {
    firstName: "Jessica",
    lastName: "Williams",
    email: "jessica.w@gmail.com",
    uid: "uid005",
    status: "inactive"
  },
  {
    firstName: "Alex",
    lastName: "Kumar",
    email: "alex.kumar@protonmail.com",
    uid: "uid006",
    status: "active"
  },
  {
    firstName: "Maria",
    lastName: "Garcia",
    email: "maria.garcia@icloud.com",
    uid: "uid007",
    status: "inactive"
  },
  {
    firstName: "James",
    lastName: "Anderson",
    email: "j.anderson@gmail.com",
    uid: "uid008",
    status: "active"
  },
  {
    firstName: "Olivia",
    lastName: "Taylor",
    email: "olivia.taylor@outlook.com",
    uid: "uid009",
    status: "inactive"
  },
  {
    firstName: "Ryan",
    lastName: "Mitchell",
    email: "ryan.mitchell@yahoo.com",
    uid: "uid010",
    status: "active"
  }
];

const result = users.find(value => value.uid === "uid004")

console.log(result)
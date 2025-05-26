
const person = {
    name: "Relando Vrapi",
    age: 29,
    isMarried: false,
    profession: "Teacher",
    hobbies: ["hiking", "diving", "swimming"]
}

// let name1 = "Relando Vrapi"
// let age1 = 29
// let isMarried1 = false
// let profession1 = "Teacher"

// let name2 = "Relando Vrapi"
// let age2 = 29
// let isMarried2 = false
// let profession2 = "Teacher"


const person2 = {
    name: "Tinna Turner",
    age: 80,
    isMarried: true,
    profession: "Musician"
}
const person3 = {
    name: "James Bond",
    age: 59,
    isMarried: true,
    profession: "Actor"
}

// const person = { age: 29, isMarried: false, profession: "Teacher", name: "Relando Vrapi" }

//ACCESS Object Properties
let text1 = "Hello my name is "+ person.name + " and I am "+ person.age + " years old."
let text2 = "Hello my name is "+ person["name"] + " and I am "+ person["age"] + " years old."
// console.log(text2)

//ADD Object Properties
person.email = "relando@beaminstitute.org"
// person["email"] = "relando@beaminstitute.org"

// MODIFY Object Properties
person.name = "Jack Smith"
// person["name"] = "Jack Smith"

//DELETE Object Properties
delete person.isMarried

const clients = []

clients.push(person)
clients.push(person2)

clients[0] = person3

// console.log(clients)










const parts = [
    {
        name: "Engine Oil",
        PID: "XPS-001234",
        price: { 
            value: 22.99, 
            currency: "EUR"
        },
        description: "lorem ipsum et etc etc",
        images: ["assests/img1.jpg", "assests/img2.jpg"],
        quantity: 50
    },
    {
        name: "Brake Pads",
        PID: "HRP-584",
        price: { 
            value: 22.99, 
            currency: "EUR"
        },
        description: "lorem ipsum et etc etc",
        images: ["assests/img1.jpg", "assests/img2.jpg"],
        quantity: 78
    }
]


const users = [
    {
        userId: 1245236347,
        firstname: "Relando",
        lastname: "Vrapi",
        username: "relandovrapi",
        email: "relando@beaminstitute.org",
        password: "dsg4uh3t4t7yegehufefhe",
        address: {
            street: "5th Street",
            apt: null,
            city: "Tirana",
            state: "Tirana",
            country: "Albania",
            zip: "1017"
        },
        isVerified: false,
        isBlocked: false,
        hobbies: ["hiking", "diving", "swimming"],
    },
    {
        userId: 1245236347,
        firstname: "Jack",
        lastname: "Smith",
        username: "jsmith",
        email: "jsmith@beaminstitute.org",
        password: "yey5r6yr5g6",
            address: {
            street: "5th Street",
            apt: null,
            city: "Tirana",
            state: "Tirana",
            country: "Albania",
            zip: "1017"
        },
        isVerified: true,
        isBlocked: false,
        hobbies: ["hiking", "diving", "swimming"]
    },
]


console.log(users[1].hobbies[2])


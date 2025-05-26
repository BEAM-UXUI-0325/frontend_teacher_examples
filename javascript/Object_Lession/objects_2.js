
const cat1 = {
    name: "Popo",
    age: "8 months",
    lifespan: 17,
    texture: true,
    gender: "male",
    colors: ["white", "orange"]
}

const cat2 = {
    name: "Kitty",
    age: "2 years",
    lifespan: 17,
    texture: false,
    gender: "female",
    colors: ["white"]
}

const cat3 = {
    name: "Jojo",
    age: "1 year 4 months",
    lifespan: 17,
    texture: true,
    gender: "male",
    colors: ["grey", "black", "white"]
}

const catCollection = [cat1, cat2, cat3]

for(let cat of catCollection){
    // let intro = "This is " + cat.name + " and " + (cat.gender === "male" ? "he" : "she") + " is " + cat.age + " old."
    let intro = "This is " + cat.name + " and it is " + cat.age + " old."
    console.log(intro)
}
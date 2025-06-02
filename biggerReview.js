
const favouriteColor = ["white", "blue", "orange"]

const article = document.getElementById("favColor")
const ul = document.createElement("ul")

for(const color of favouriteColor){
    const li = document.createElement('li')
    li.append(color.toUpperCase())
    ul.append(li)
}

article.append(ul)




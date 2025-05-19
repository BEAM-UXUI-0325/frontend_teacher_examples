
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "abc", "xyz"] //Length = 8
            // 0       1           2             3           4         5           6
const months = [1,2,3,4,5,6,7,8,9,10,11,12] //Length: 12
        //    0 1 2 3 4 5 6 7 8  9 10 11 

const misc = [1, "hello", 12, true, null, undefined, NaN, Symbol(), 300n, [], {}, function abc(){},,]

const bools = [false, false, true, false, true, true, false, true]

const hobbies = ["hiking", "diving", "driving", "guitar", "painting", "reading"]


//Doing CRUD with the array: Create, Read, Update, Delete----------------------")

// days[0] = "MON"
// days.push("RELANDO")
// days.unshift("JACK")
// days.pop()
// days.shift()

days[1] // read value
days.push("some item") //add value at the end
days.unshift("add at the begg..") //add value at the start
days[0] = "updated content" //update a value
days.pop() //delete value at the end
days.shift() //delete value at the start

// days.reverse()
// const newMerge = months.concat(days, misc).reverse()

// const copy = hobbies.slice(1)
// const copy2 = hobbies.slice(0,3)

// let answer = hobbies.includes("reading")


let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "abc", "xyz"] //Length = 8
            // 0       1           2             3           4         5           6
let months = [1,2,3,4,5,6,7,8,9,10,11,12] //Length: 12
        //    0 1 2 3 4 5 6 7 8  9 10 11 

let misc = ["hello", 12, true, null, undefined, NaN, Symbol(), 300n, [], {}, function abc(){},,]


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
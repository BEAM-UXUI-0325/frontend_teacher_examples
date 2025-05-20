
// && AND Operator
// It returns the first false thing it finds, if they are both true it will return the last true thing
console.log(7 && 0 && "" && "something")
console.log(7 && 12 && "abc" && "something")

// || OR Operator
// It returns the first true thing it finds, if they are both true it will return the last false thing
console.log(7 || 0 || "" || "something")
console.log(false || "" || 0 || NaN)

// ! NOT Operator
// It negates the current data (gives you the opposite boolean)
let x = ""
console.log(!x)
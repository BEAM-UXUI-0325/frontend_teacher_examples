// We need a system which checks if Voters are eligible to vote.
// Conditions:
// 1. They must be US citizens
// 2. They must be within the legal age to vote
// 3. They must be citizens of a eligible state

//What is given:
let age = 44
let country = "  uSa"
let state = " moNTana  "
//---------------------
let eligibleStates = ["arizona", "washington", "florida", "montana", "michigan"]
let eligibleCountry = "USA"

//Filter by country
if(country.trim().toLowerCase() !== eligibleCountry.toLowerCase()){
    console.log("Citizens from "+country+" cannot vote in "+eligibleCountry)
    return
}
//Filter by state
if(!eligibleStates.includes(state.trim().toLowerCase())){
    console.log("Citizens from "+state+" cannot vote in this term. You can vote in 2 years")
    return
}

if(age >= 18){
    console.log("Here is the ballot. Go vote.")
}
else {
    console.log("You cannot vote, try when you're 18 and older")
}
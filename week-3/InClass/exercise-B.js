const ourClass = ["Rachid", "Ethan", "Gloria", "Damian"];
const otherClass = ["Kaur", "Isha", "Yuxuan", "Asaad"];

const combineArray = ourClass.concat(otherClass)
console.log(combineArray.sort())


function inClass(name, array) {   
if (array.includes(name)) {
    return `${name} is at the class with ${array.join(", ")}`
} else {
    return `${name} is not at the class with ${array.join(", ")}`
}
}


console.log(combineArray.sort())



const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let currentYear = (2022)


function calculateAge(birthYears) {
    return currentYear - birthYears
}

const ages = []

birthYears.forEach((birthYears) => {
    ages.push(calculateAge(birthYears))
})

console.log(birthYears)
console.log(ages)


function allowedAgeToDrive(birthYears) {
    const age = calculateAge(birthYears)
    const driving = 17;


    if (age >=17 ) {
        return `Born in ${birthYears} can drive`
    } else {
        return `Born in ${birthYears} can drive ${allowedAgeToDrive - age } years`
    }
    
}

console.log(allowedAgeToDrive)
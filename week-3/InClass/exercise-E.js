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



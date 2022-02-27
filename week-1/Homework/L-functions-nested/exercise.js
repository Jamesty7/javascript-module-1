var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
let greet = "HELLO "


function spellsName(mentor) {
    return mentor.toUpperCase()
}

function studentsNames(mentor) {
    return greet + spellsName(mentor)
}

console.log(studentsNames(mentor1));
console.log(studentsNames(mentor2));
console.log(studentsNames(mentor3));
console.log(studentsNames(mentor4));
console.log(studentsNames(mentor5));





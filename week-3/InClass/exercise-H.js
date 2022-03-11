const names = ["Rachid", "Ethan", "Gloria", "Damian"]
const NAME_TO_FIND = "Matthew"




function findName(names) {
    if (names.includes(NAME_TO_FIND)){
        return "FOUND ME"
    }
   return "Havent found me"
}



console.log(findName(names))
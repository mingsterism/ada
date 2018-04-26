function isEven (number) {
    if (number % 2 == 0) {
        return true
    }  else {
        return false
    }
}

function mainFunction (number) {
    if (isEven(number)) {
        console.log("The number", number, "is Even")
        console.log("blablabal")
        console.log("blablabal")
        console.log("blablabal")
        console.log("blablabal")
    } else {
        console.log("The nuber", number, "is Odd")
    }
}

mainFunction(20)
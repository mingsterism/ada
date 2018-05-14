function oddEven(n) {
    if (n % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}


const ARGS = process.argv.slice(2 , process.argv.length)
console.log(oddEven(ARGS[0]))

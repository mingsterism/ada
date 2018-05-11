var num = process.argv[2];

function loopBuzz (num) {
  for (let n = 0; n < num; n += 1) {
    console.log(fizzBuzz(n))
  }
}

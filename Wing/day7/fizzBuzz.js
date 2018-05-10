// @flow

function fizzBuzz (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz'
  } else if (number % 3 === 0) {
    return 'fizz'
  } else if (number % 5 === 0) {
    return 'Buzz'
  }
}

function betweenBuzz (a, b) {
  do {
    console.log(fizzBuzz(a)); a += 1
  }
  while (a <= b)
}

console.log(betweenBuzz(11, 20))

function loopBuzz (num) {
  for (let n = 0; n < num; n += 1) {
    console.log(fizzBuzz(n))
  }
}

console.log('____________________________________')
console.log(loopBuzz(5))
 
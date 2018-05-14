function fizzBuzz(number) {
  // if multiple of 3 print Fizz
  // if multiple of 5 print Buzz
  // if multiple of 3 & 5 print FizzBuzz
  // else print nothing
  if (number % 3 == 0 && number % 5 == 0) {
    return 'FizzBuzz';
  } else if (number % 5 == 0) {
    return 'Buzz';
  } else if (number % 3 == 0) {
    return 'Fizz';
  }
}

function mainFizzBuzz(numbers) {
  for (let x = 0; x < numbers; x += 1) {
    if (fizzBuzz(x) == undefined) {
      continue;
    } else {
      console.log(fizzBuzz(x));
    }
  }
}

mainFizzBuzz(1000000);


function meow() {
  console.log('meow');
}

function printNumbers(numbers) {
  for (let x = 0; x < numbers; x += 1) {
    meow();
  }
  return 10;
}

console.log(printNumbers(10));


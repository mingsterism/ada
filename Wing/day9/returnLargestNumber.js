function largestOfFour(arr) {
  const result = '';
  for (let i = 0; arr.length > i; i += 1) {
    let largestNumber = arr[i][0];
    for (let n = 1; arr[i].length > n; n += 1) {
      if (arr[i][n] > largestNumber) {
        largestNumber = arr[i][n];
      }
    } result[i] = largestNumber;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


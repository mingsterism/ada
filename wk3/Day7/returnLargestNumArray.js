
function largestOfFour(arr) {
  // You can do this!
  // 1)Loop through the boxes
  // 2)
  return arr;
}


// Wing
// You can do this! Steps
// 1)Split the individual array into string
// 2)get the highest number within array
// 3) console.log the result


// Adam
// You can do this! Steps
// 1)need to keep track of the array with the answer and the largest number of each sub-array.
// 2)check the timing of the storing of variables
function largestOfFourAdam(arr) {
  const result = [];
  for (let n = 0; n < arr.length; n += 1) { // outer loop
    let largestNumber = arr[n][0]; // always begins with first number in box. temporary value here
    for (let sb = 1; sb < arr[n].length; sb += 1) { // inner loop
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    result.push(largestNumber);
  }
  return result;
}

console.log(largestOfFourAdam([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]));

// return [ 5, 27, 39, 1001 ]


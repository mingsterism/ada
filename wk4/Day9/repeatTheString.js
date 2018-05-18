function repeatStringNumTimes(str, num) {
  // repeat after me
  let results = '';
  while (num > 0) {
    results += str;
    num--;
  }
  return results;
}

console.log(repeatStringNumTimes('hello', -3));

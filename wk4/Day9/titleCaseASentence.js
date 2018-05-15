// Wing Function ======================================

function titleCase(str) {
  const lowerStr = str.toLowerCase();
  const splitStr = lowerStr.split(' ');
  for (const i in splitStr) {
    result = splitStr[i][0].toUpperCase().slice(1);
  }

  return result.join(' ');
}

//= ================================================


// Hibiki===========================================

function hibikiFunction(str) {
  /*
    Input: Accepts a string
    Outputs: Returns a string with only the first letter of the word uppercased
    */
  const listString = str.toLowerCase().split(' ');
  let result = '';
  for (const word in listString) {
    result = `${result + listString[word][0].toUpperCase() + listString[word].slice(1)} `;
  }
  return result.trim();
}

console.log(hibikiFunction('I am a big cow'));

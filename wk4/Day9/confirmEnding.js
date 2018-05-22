/*
1) Identify the ending of the words and the end sentence
2) if equal to target, return true
*/


function confirmEnding(str, target) {
  if (str.substr(-1, 1) === target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return true;
  } else if (str.split(' ').substr(-targer.length) === target) {
    return true;
  }
}
console.log(confirmEnding('He has to give me a new name"', 'name'));


// muaz function ====================================

function muazRafiq(str, target) {
  if (str.substr(-1, 1) === target) {
    return true;
  } return false;
}

console.log(muazRafiq = ('This is a sentence', 'sentence'));

// Wing ========================================

function confirmEnding(str, target) {
  var strList = str.split(" ");
  if (str.substr(-1, 1) === target) {
    return true;
  } else if (strList[strList.length - 1].substr(-1,target.length) === target) {
    return true;
  } 
    return false;
  
}

confirmEnding('Open sesame', 'same');

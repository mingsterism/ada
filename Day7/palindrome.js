function palindrome(string) {
    /*  
    description: Check if Reverse String equals to string
    inputs: 
    outputs: 
    */

      var re = /[^a-z0-9]/gi;
      var cleanedString = string.replace(re, '').toLowerCase();
      var reversedCleanedString = cleanedString.split("").reverse().join("")

        var originalCleanString = string.replace(re, '').toLowerCase() ;
      if (originalCleanString == reversedCleanedString) {
          return true;
        }
        else {
            return false;
        }
}

console.log(palindrome("A man, a plan, a canal. Panama"))




























// function palindrome(str) {

//     let front = 0;
//     let back = str.length - 1;

// while (back > front) {

//  while ( str[front].match(/[\W_]/) ) {

// front++;
//       continue;
//     }

//  while ( str[back].match(/[\W_]/) ) {
//       back--;
//       continue;
//     }

//  if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
//     front++;
//     back--;
//   }
  

//  return true;

// }
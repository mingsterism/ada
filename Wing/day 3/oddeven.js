let number = 6

function oddEven(number) {
if (number % 2 === 0){
    return true}
else {
    return false
};
}

function Message(number){
  if (oddEven === true) {
    return "This " + number + " is Even"
}
  else {
    return "This " + number + " is Odd"
  };
}

console.log(Message(5))

let person = {
  _name: 'Lu Xun',
  _age: 137,
  newAge: 20
  set age (newAge) {
    if (typeof newAge === 'number'){
      this._age = newAge;
    }

      else {
        console.log('Message')
        return 'Invalid input'
      }
    };
}

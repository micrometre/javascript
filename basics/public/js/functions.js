// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  
var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

/*
function inYen(dollars, ) {
    let amount = dollars * 113;
    return amount;
}
;
//console.log(inYen(20) + ' Japanese yen');

function eat(food) {
    return food + ' tasted really good.'
}
console.log(eat("bananas"))
*/

//Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num = [...newArr];
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));





//Copy Array Items Using slice()

function forecast(arr) {
  return arr.slice(2,4)
}

//console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Add Items Using splice()
function htmlColorNames(arr) {
let startIndex = 0;
let amountToDelete = 2;
arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}
//console.log(htmlColorNames(['WhiteSmoke', 'PaleTurquoise', 'FireBrick']));

//Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop();
    // Change this line
    let shifted = arr.shift()
    // Change this line
    return [shifted, popped];
}
//console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9)
    return arr;
}
//console.log(mixedNumbers(['IV', 5, 'six']));

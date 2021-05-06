// traditional for loop
let numbers = [1, 2, 3, 4, 5];
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} 
//forEach loop example 1
numbers.forEach(function(number) {
    console.log(number);
});


//forEach loop example 2
let hotelPrices = [300, 95, 130, 88, 200, 78 ];
function findDeals(price) {
    if (price < 100) {
    console.log(price)
    }
}
hotelPrices.forEach(findDeals);

// ES6 arrow function representation 
numbers.forEach(number => console.log(number));

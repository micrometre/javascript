function sum(numberArray) {
    let sum = 0;
    for (let number of numberArray) {
        number =+ sum;
        console.log(sum);
    }
    return sum;
}

sum([2, 3, 4]);
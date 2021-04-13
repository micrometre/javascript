let wordList = ['able', 'ale', 'apple'];
function longestWord(array) {
    let longestString = '';
    for (var word of array) {
        if (word.length > longestString.length) {
            longestString = word;
        }
    }
    return longestString;
}
;
console.log(longestWord);

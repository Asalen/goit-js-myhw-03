function findLongestWord(string) {
    // Пиши код ниже этой строки
    const words = string.split(' ');
    let longWord = words[0];
    let longWords = [];
    for (let word of words) {
        if (longWord.length <= word.length) {
            longWord = word;
        }
    }
    for (let word of words) {
        if (longWord.length === word.length) {
            longWords.push(word);
        }
    }
    return longWords.join(', ');


    // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
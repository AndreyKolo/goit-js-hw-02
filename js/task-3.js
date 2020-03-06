// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

'use strict'

const findLongestWord = function (string) {
    const words = string.split(' ');

    let maxWord = words[0];
    for (let i = 1; i < words.length; i = i + 1) {
        if (maxWord.length < words[i].length) {
            maxWord = words[i];
        }
    }
    return maxWord;

}

// * Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // force
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

'use strict'

const word1 = 'spam';
const word2 = 'sale';

const checkForSpam = function (message) {
    const value = message.toLowerCase();
    if (value.includes(word1) || value.includes(word2)) {
        return true;
    }
    return false;
};

/*Вызовы функции для проверки работоспособности твоей реализации.*/

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best salec offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
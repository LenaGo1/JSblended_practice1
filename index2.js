//module2 
// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// Используем function expression для объявления функции - через переменные

// const capitalize = function (string) {
//     console.log(string);
//     const array = string.split(' ');
//     console.log(array);
//     let newArray = [];
//     for (let elem of array) {
//         console.log(elem);
//         const word = elem[0].toUpperCase() + `${elem.slice(1)}`;
//         console.log(word);
//         newArray.push(word);
//     }
//     console.log(newArray);
//     return string = newArray.join(' ');
// };
// console.log(capitalize('the quick brown fox'));
//  // 'The Quick Brown Fox '

//Просто разбираем: можно ли без приведения строки в массив перебрать строку ?
// const string = 'I love JS!';
// for (let word of string) {
//     //убрать пробелы(пропустить)
//     if (word === " ") {
//         continue;
//     }
//     console.log(word);
// }
// console.log(string);
   
//task2// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті
//используеи декларативный способ объявления функции
// function countVowels(string) {
//     console.log(string);
//     const vowels = "aeiouAEIOU";
//     let total = 0;
//     for (let item of string) {
//         //console.log(item);
//         if (vowels.includes(item)) {
//             total += 1;
//         }
           
//     }
//     console.log(total);
// }
// countVowels('the quick brown fox AU') // 5

// или
// function countVowels(string) {
//     console.log(string);
//     const vowels = "aeiou";
//     let total = 0;
//     for (let item of string.toLowerCase()) {
//         //console.log(item);
//         if (vowels.includes(item)) {
//             total += 1;
//         }
           
//     }
//     console.log(total);
// }
// countVowels('the quick brown fox AU') // 5

//task1
// let admin;
// let name = "Джон";
// admin = name;
// name = "Tina"
// alert(admin);

//task2
// const leapYear = "Высокосный год";
// const notLeapYear = "НеВысокосный год";
// let userYear = prompt();
// console.log(userYear);
// if (userYear === null) {
//     alert("Cancel")
// }

// else if (userYear == 0 || isNaN(userName)) {
//     alert("Cancel");
// }
// else if (userYear % 4 === 0 && userYear != 0) {
//    alert(leapYear); 
// }
// else {
//     alert(notLeapYear);
// }


// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує
//користувачу вгадати його Користувач вводить свій варіант і отримує 
//результат(Виграв чи ні) Вивести результат в форматі "Вітаю ви 
//вгадали число(тут варіант компютера)" або "Ви програли, 
//компютер загадав(тут варіант компютера)"
// let userInput = prompt("Введи число от 1 до 10!");
// let computerInput = Math.floor(Math.random() * (11 - 1) + 1);
// console.log(computerInput);
// if (userInput === null) {
//     alert('Отменено пользователем');
// } else {
    
//     if (+userInput === computerInput) {
//         console.log(`Совпало: ${userInput} - ${computerInput}`);
//     }
//     else if (isNaN(userInput)) {
//         alert ('Вы ввели не число!');
//     }
//     else if (userInput < 1 || userInput > 10) {
//         alert('Нужно ввести число от 1 до 10');
//         }
//     else {
//         alert(`Не совпало: ${userInput} - ${computerInput}`);
//     }
// }
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


//Лекция Репеты №7

// callback функции
// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }
// const greetWithName = function (callback) {
//     const name = 'Mango';

//     console.log(callback);
//     callback(name);
// };
// greetWithName(greet);

//отложенный вызов

// console.log('в поле перед таймаутом');


 // setTimeout(function () {
//     console.log('через 3 секунды колбека в таймауте');
// }, 3000);
// console.log('в коде после таймаута');

// отложенный вызов: http-запрос

// const handleFetchSuccess = function (data) {
//     console.log(data);
// }

// console.log('перед fetch');
// fetch('https://swapi.co/api/people/1/')
//     .then(res => res.json())
//     .then(function (data)
//     {
//         console.log(data);
//     });

//     console.log('после fetch');

//отложенный вызов: регистрация событий
// клик по кнопке

// const buttonRef = document.querySelector('button');
// const handleButtonClick = function () {
//     console.log('Click');
// };
// buttonRef.addEventListener('click', handleButtonClick);

//замыкание

const makeDish = function (shefName, dish) {
    console.log(`${shefName} готовит ${dish}`);
}
// makeDish('Mango', 'пирожок')
// makeDish('Mango', 'чай');
// makeDish('Mango', 'омлет');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

//чтобы каждый раз не  писать имя повара, поможет замыкание

const makeShef = function (name) {
    
    console.log(name);
}

const mango = makeShef('Mango');
const poly = makeShef('Poly');

// mango('котлеты');
// poly('чай');
console.dir(mango);
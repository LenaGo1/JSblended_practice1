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

// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} готовит ${dish}`);
// }
// makeDish('Mango', 'пирожок')
// makeDish('Mango', 'чай');
// makeDish('Mango', 'омлет');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

//чтобы каждый раз не  писать имя повара, поможет замыкание

// const makeShef = function (name) {
    
//     console.log(name);
// }

// const mango = makeShef('Mango');
// const poly = makeShef('Poly');

// // mango('котлеты');
// // poly('чай');
// console.dir(mango);

//практика занятие 2
//модуль3

// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення 
//і обєкт з цінами товару) Ця ф - я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } 
//const orderA = { apple: 5, cheese: 1, bread: 3 } 
//const orderB = { orange: 10, pork: 2, bread: 1 }

// 
// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. 
//Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// const isObjectEmpty = function (obj) {
//     const keys = Object.keys(obj);
//     console.log(keys);
//     console.log(keys.length);
//     if (keys.length === 0) {
//         return true;
//     }
//     return false;

// }
// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({ name: 'user', age: 21}));

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)

const SIZES = {
BIG: { price: 25, cal: 100, time: 15 },
SMALL : { price : 15, cal: 50, time: 7 },
MEDIUM: { price : 15, cal: 50, time: 7 }
}
const STUFFING = {
CHEESE: { name: "CHEESE",price : 6.5, cal: 45, time: 2 },
BEACON : { name: "BEACON",price : 10, cal: 70, time: 6 },
TOMATO : { name: "TOMATO",price : 12.1, cal: 4, time: 5 },
CHICKEN : { name: "CHICKEN",price : 9.3, cal: 30, time: 5.1 }
}
const SAUCES = {
MUSTARD: {name: "MUSTARD", price : 3, cal: 5, time: 1 },
KETCHUP: {name: "KETCHUP", price : 4.2, cal: 20, time: 1.5 },
BOLOGNESE: {name: "BOLOGNESE", price : 7.5, cal: 50, time: 3 }
}
    // Створити всі методи і перевірити чи вони працюють

    //сщздаем объект пица
const pizza = {
        //свойства
        size: [],
        stuff: [],
        sauces: [],

        isValid: false,
    
        //методы
        toShowSize() {
            //если такая добавка есть - выходим
        
        },
        setStuff(value) {
            if (this.stuff.includes(value))
                return console.log('Такая добавка уже есть');
    

            this.stuff.push(value);
        
            console.log(this.stuff);
        },

        setSauces(value) {
            if (this.sauces.includes(value))
                return console.log('Такой соус уже есть');
            this.sauces.push(value);
            console.log(this.sauces);
        },
    
        delStuff(value) {
            if (!this.stuff.includes(value))
                return console.log('Такой добавки нет')
            for (let i = 0; i < this.stuff.length; i += 1) {
                if (this.stuff[i] === value) {
                    this.stuff.splice(i, 1)
                    return console.log(this.stuff);
                }
            }
            return console.log(this.stuff);
        },
    
        delSauces(value) {
            if (!this.sauces.includes(value))
                return console.log('Такого соуса нет')
            for (let i = 0; i < this.sauces.length; i += 1) {
                if (this.sauces[i] === value) {
                    this.sauces.splice(i, 1)
                    return console.log(this.sauces);
                }
            }
            return console.log(this.sauces);
        },

        // метод для розрахунку загальної ціни піци (розмір + добавки + соуси)
        getCost(num) {
            let totalPrice = 0;
            for (let i = 0; i <= num; i += 1) {
                if(this.size[i]===undefined ||this.stuff[i] ===undefined ||this.sauces[i]===undefined) continue
                console.log(this.size[i].price);
                console.log(this.stuff[i].price);
                console.log(this.sauces[i].price);
                totalPrice += this.size[i].price + this.sauces[i].price + this.sauces[i].price 
            }
            return console.log(totalPrice);
        },
    getCalories(num) { let totalPrice = 0;
            for (let i = 0; i <= num; i += 1) {
                if(this.size[i]===undefined ||this.stuff[i] ===undefined ||this.sauces[i]===undefined) continue
                // console.log(this.size[i].price);
                // console.log(this.stuff[i].price);
                // console.log(this.sauces[i].price);
                totalPrice += this.size[i].cal + this.sauces[i].cal + this.sauces[i].cal 
            }
            return console.log(totalPrice);
            
        },
    
        //тут надо через шаблонную строку все вывести ...
    toShowOrder() { 
        console.log(tis.size,
                    this.stuff,
                    this.sauces);
    },
        

        toSetSize() { },
    
        toGetTotalTime() { },
    
        toValidateOrder() { }
    }

console.log(pizza);
pizza.toSetSize(SIZES.BIG)
pizza.setStuff(STUFFING.CHEESE);
pizza.setStuff(STUFFING.BEACON);
pizza.setStuff(STUFFING.CHEESE);
// pizza.setSauces(SAUCES.KETCHUP);
// pizza.setSauces(SAUCES.KETCHUP)
pizza.delStuff(STUFFING.CHEESE)

// pizza.delSauces(SAUCES.KETCHUP)
pizza.getCost(4)
pizza.getCalories(4)
pizza.getTotalTime(4)

const burger = {
    size: [],
    stuff: [],
    sauces: [],

    isValid: false,
}

//устанавливаем ему размер
pizza.toSetSize.call(burger, SIZES.SMALL)

pizza.setStuff.apply(burger, [STUFFING.BEACON])

function myFunc(callback) {
    callback()
    
}
myFunc(pizza.toSetSize.bind(burger, SIZES.SMALL))
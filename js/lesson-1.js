"use strict";

//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь

// const answer = prompt("Яка офіційна назва JavaScript?");

// if (answer.toUpperCase() === "ECMASCRIPT") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// answer.toUpperCase() === "ECMASCRIPT"
//   ? alert("Вірно!")
//   : alert("Не знаєте? ECMAScript!");

// alert(
//   answer.toUpperCase() === "ECMASCRIPT" ? "Вірно!" : "Не знаєте? ECMAScript!"
// );

//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) через prompt і виводить у консоль
//рядок у форматі годин та хвилин
// 70 === 01:10
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const time = prompt("Enter number");
// const hours = Number.parseInt(time / 60);
// const minutes = time % 60;
// const modifyHours = String(hours).padStart(2, "0");
// const modifyMinutes = String(minutes).padStart(2, "0");

// console.log(modifyHours + ":" + modifyMinutes);

//3. Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

// const max = 10;
// const min = 1;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// function getNumbers(min, max) {
//   let total = 0;
//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(getNumbers(1, 10));

// 4. Змінна num може набувати 4 значення: 1, 2, 3 або 4 (запитуй число у користувача через prompt).
// Якщо вона маєзначення '1', то у змінну result запишемо 'winter', якщо має значення '2' - 'spring' і т.д.
// Розв'яжіть завдання через switch-case.

// const num = prompt("Enter 1-4");
// let result = "";
// switch (num) {
//   case "1":
//     result = "winter";
//     break;
//   case "2":
//     result = "spring";
//     break;
//   case "3":
//     result = "summer";
//     break;
//   case "4":
//     result = "autumn";
//     break;
//   default:
//     result = "Enter 1-4";
// }

// console.log(result);


//5. Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "admin",
//то prompt запрашує пароль.
//Якщо нічого не ввели чи нажали Cancel
//вивести в alert рядок "Cancel!"
//В противному випадку вивести рядок "Who are you?!"

//Пароль перевіряти так:
//Якщо введен пароль "123456",
//то вивести рядок "Welcome, boss!"
//в іншому випадку виводити рядок "Wrong password!"

// const login = prompt('Enter your login: ');
// console.log(login);

// if (login === "admin") {
//     const password = prompt("Enter your password: ");
//     // if (password === "123456") {
//     //     alert("Welcome, boss!");
//     // }
//     // else {
//     //     alert("Wrong password!");
//     // }
//     alert(password === "123456" ? "Welcome, boss!" : "Wrong password!");
// }
// else if (login === "" || login === null) {
//     alert("Cancel");
// }
// else {
//     alert("Who are you?!");
// }




// 6. Напишіть функцію checkNumber(num), яка перевіряє число:
// Якщо число ділитися на 3 повертати "fizz"
// Якщо ділитися на 5 повертати "buzz"
// Якщо ділитися на 3 і на 5 повернути "fizzbuzz"
// Додайте перевірку, що параметр дійсно є числом (в іншому випадку
// функція має повертати "Not a number")
// В якості дефолтного випадку повернути "Error!"

// function checkNumber(num) {
//     if (typeof num !== "number") {
//         return "Not a number";
//     }
//      if (num % 3 === 0 && num % 5 === 0) {
//        return "fizzbuzz";
//      }
//     if (num % 3 === 0) {
//         return "fizz";
//     }
//     if (num % 5 === 0) {
//         return "buzz";
//     }
   
//     return "Error!";
// }
// console.log(checkNumber(1));


// 7. Напишіть функцію, яка перевертатиме рядок у зворотньому порядку

// function reverse(string) {
//     let reverseString = "";
//     for (let i = string.length - 1; i >= 0; i--){
//         reverseString += string[i];

//     }
//     return reverseString.toLowerCase();
// }
// console.log(reverse("Hello"));

// 8. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

// let number = prompt ("Enter number more then 100")
// while (number < 100 && number) {
//     number = prompt ("Enter number more then 100")
// }
// console.log(number || "0");
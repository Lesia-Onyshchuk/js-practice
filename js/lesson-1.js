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

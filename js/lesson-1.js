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

const time = prompt("Enter number");
const hours = Number.parseInt(time / 60);
const minutes = time % 60;
const modifyHours = String(hours).padStart(2, "0");
const modifyMinutes = String(minutes).padStart(2, "0");

console.log(modifyHours + ":" + modifyMinutes);

// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll")
// const idx = styles.indexOf("blues")
// styles[idx] = "classic"
// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i + 1} - ${array[i]}`)
//     }

// }
// logItems(styles)

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

//const logins = ["Peter", "John", "Igor", "Sasha"];

// //function checkLogin(array) {
//     //const name = prompt("Enter your name");
//     //alert(array.includes(name) ? `Welcome, ${name}` : `User not found`);
//     // for (const login of array) {
//     //     if (name === login) {
//     //         alert(`Welcome, ${name}`);
//     //         return;
//     //     }
//     // }
//     // alert(`User not found`);
// }
// //checkLogin(logins);

// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNum(array) {
//     const result = [];
//     for (let i = 0; i < array.length - 1; i++) {
//         const currentElement = array[i];
//         const nextElement = array[i + 1];
//         result.push(currentElement + nextElement);

//     }
//     return result;
// }

// console.log(sumNum(someArr))

// 8. Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// / 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const item of keys) {
//   console.log(`${item}:${user[item]}`);
// }

// 9. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів і
// рядок з назвою фрукта.
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(fruits, "Апельсин"));

// 10. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивість в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

const calculator = {
  read(a, b) {
    this.valueA = a;
    this.valueB = b;
  },
  sum() {
    if (this.exist()) {
      return this.valueA + this.valueB;
    }
    return "values not found";
  },
  mult() {
    if (this.exist()) {
      return this.valueA * this.valueB;
    }
    return "values not found";
  },
  raise() {
    if (this.exist()) {
      return this.valueA ** this.valueB;
    }
    return "values not found";
  },
  exist() {
    return this.valueA && this.valueB;
  },
};
// calculator.read(3, 6);
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator.raise());

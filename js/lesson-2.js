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

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.valueA + this.valueB;
//     }
//     return "values not found";
//   },
//   mult() {
//     if (this.exist()) {
//       return this.valueA * this.valueB;
//     }
//     return "values not found";
//   },
//   raise() {
//     if (this.exist()) {
//       return this.valueA ** this.valueB;
//     }
//     return "values not found";
//   },
//   exist() {
//     return this.valueA && this.valueB;
//   },
// };
// // calculator.read(3, 6);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.raise());

// 11. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;


// const phonebook = {
//     contacts: [],
//     add(data) {
//          for (const contact of this.contacts) {
//             if (contact.name === data.name || contact.email === data.email) {
//                 return console.log("User is already exsist");
//             }
//         }
//         const contact = {
//             name: data.name,
//             email: data.email,
//             category: data.category ?? "default",
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         }
       
//         this.contacts.push(contact);
//     },
//     list() {
//         console.table(this.contacts);
//     },
//     filtered(category) {
//         let array = [];
//         for (const contact of this.contacts) {
//             if (category === contact.category) {
//                 array.push(contact);
//             }
//         }
//         return array;
//     },
//     delete(name) {
//         for (let i = 0; i < this.contacts.length; i++) {
//             if (name === this.contacts[i].name) {
//                 this.contacts.splice(i, 1);
//             }
//         }

//     },
//     updateName(oldName, newName) {
//         for (const contact of this.contacts) {
//             if (oldName === contact.name) {
//                 contact.name = newName;

//             }
//         }

//     },

//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
// };
  
// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });
// console.log(phonebook.filtered("friends"));
// phonebook.delete("Poly");
// phonebook.updateName("Mango", "Alice");


// phonebook.list();

// HOME WORK 

// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.
// 5. Напишіть функцію, яка шукатиме найдовше слово у реченні
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// 6. Напишіть функцію, яка перевіряє, чи є
// рядок (без урахування регістра) паліндромом.
// Паліндром — це слово, число, фраза або інша
// послідовність символів, яка читається як
// в обратному, так і в прямому напрямку, наприклад,
// madam або racecar
// console.log(isPalindrome("Abba")); //true
// console.log(isPalindrome("hello")); //false
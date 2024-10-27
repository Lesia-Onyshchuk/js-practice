const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];
// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'

// function getNames(array) {
//     return array.map(item => item.name);
// }
// console.log(getNames(tweets));

// function getRandomValues(array, prop) {

//     if (!array[0][prop]) {
//         return "Sory, no such property in array!";
//     }
//     return array.map(item => item[prop]);
// }
// console.log(getRandomValues(tweets, "gende"));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter(item => item.tags.includes("js") )

// }
// console.log(getUsersWithJs(tweets));

// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
//   return array.filter(item => item.gender === gender)
//     .map(item => item.name)

// }

// function getUsersWithGender(array, gender) {
//   return array.reduce((names, item) => {
//     if (item.gender === gender) {
//       names.push(item.name)
//     }
//     return names
//   }, [])
// }

// console.log(getUsersWithGender(tweets, "male"));

// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags(array) {
//   return array
//     .flatMap((item) => item.tags)
//     .filter((tag, index, array) => array.indexOf(tag) === index)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// console.log(getSortedUniqueTags(tweets));

// 5. Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatisticsOfTags(array) {
//   return array
//     .flatMap((item) => item.tags)
//     .reduce((stats, tag) => {
//       if (stats[tag]) {
//         stats[tag] += 1;
//       } else {
//         stats[tag] = 1;
//       }
//       return stats;
//     }, {});
// }

// console.log(getStatisticsOfTags(tweets));

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numberOfPosts - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {

//   constructor (params){
//     this.userName = params.userName;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//   }

//   getInfo(){
//     return  `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`
//   }

//   updateNumberOfPosts(amount){
//     this.numberOfPosts += amount;
//   }
// }

// const user = new User ({
//   userName : "Poly",
//   age : 21,
//   numberOfPosts : 3
// }

// )

// console.log(user);
// console.log(user.updateNumberOfPosts(2));
// console.log(user.getInfo());

// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;

//   constructor (login, email){
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData(){
//     return {login: this.#login, email: this.#email}
//   }

//   set changeEmail(newEmail){
//     this.#email = newEmail;
//   }
// }

// const client = new Client ("nameClient", "nameclient@supermail.com");

// console.log(client.getClientData);
// console.log(client.changeEmail="newemail@supermail.com");

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority),

// class Notes {
//   static Priority = {
//     HIGH: "high",
//     MIDDLE: "middle",
//     LOW: "low",
//   }

//   constructor() {
//     this.items = [];
//   }

//   getNotes() {
//     return this.items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(noteText) {
//     this.items = this.items.filter(item => item.text !== noteText);
//   }

//   updatePriority(noteText, newPriority) {
//     const note = this.items.find(item => item.text === noteText);
//     if (note) {
//       note.priority = newPriority;
//     }
//   }
// }

// const notes = new Notes()

// notes.addNote({ text: "Hello!", priority: Notes.Priority.HIGH })
// notes.addNote({ text: "Hi!", priority: Notes.Priority.LOW })
// notes.addNote({ text: "Bye", priority: Notes.Priority.MIDDLE })

// notes.removeNote("Hi!");
// notes.updatePriority("Hello!", Notes.Priority.MIDDLE)
// console.table(notes.getNotes());

// 5. Створити клас Contact для створення контакта з полями name, email і phone.
// Потім створиnb клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.

// class Contact {
//   constructor(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }
// }

// class ContactBook {
//   constructor() {
//     this.contacts = [];
//   }

//   addContact(contact) {
//     this.contacts.push(contact);
//   }

//   removeContact(name) {}
//   findContact(name) {}
// }

// const contactBook = new ContactBook();

// const contact1 = new Contact("Alice", "alice@gmail.com", "0971343456");

// contactBook.addContact(contact1);
// console.log(contactBook);

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

function askPassword(ok, fail) {
  let password = prompt("Password?");
  if (password === "admin") ok();
  else fail();
}

const user = {
  name: "Alex",
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 6. Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно

// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce
// 8. Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

// const data = [10, 20, 30, 40, 50, 60];
// const alphData = ["a", "b", "c", "d", "e"];
// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name
// 4. Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"
//Напиши клас Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

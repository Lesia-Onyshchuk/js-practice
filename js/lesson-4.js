// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ul");
// const addBtn = document.createElement("button");
// const removeBtn = document.createElement("button");
// const input = document.createElement("input");

// document.body.append(input, addBtn, removeBtn, list);

// addBtn.textContent = "Add";
// removeBtn.textContent = "Remove";

// addBtn.addEventListener("click", addFoo);
// removeBtn.addEventListener("click", removeFoo);

// function addFoo() {
//   const info = input.value.trim();
//   if (info === "") {
//     return;
//   }
//   const li = document.createElement("li");
//   li.textContent = info;
//   list.append(li);
//   if (list.children.length % 2 === 0) {
//     li.style.backgroundColor = "yellow";
//   } else {
//     li.style.backgroundColor = "blue";
//   }
//   li.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
//   input.value = "";
// }

// function removeFoo() {
//   if (!list.lastElementChild) {
//     return;
//   }
//   list.lastElementChild.remove();
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const form = document.createElement("div");
// changeStyle();
// document.body.append(form);

// form.addEventListener("click", changeStyle);

// function changeStyle() {
//   form.style.cssText = forms[randomither(forms.length)];
//   form.style.backgroundColor = getRandomHexColor();
//   form.style.position = "absolute";
//   form.style.top = `${randomither(100)}%`;
//   form.style.left = `${randomither(100)}%`;
// }

// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
//   {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
//   {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];

// const list = document.querySelector(".stats");

// function foo(arr) {
//   return arr
//     .map(
//       ({ id, name, gender, likes, tags }) => `<li class="stats-item ${gender}">
//   <p class="stats-name">${name}</p>
//   <p class="stats-likes">${likes}</p>
//   <p class="stats-tags">${tags.join(", ")}</p>
// </li>`
//     )
//     .join("");
// }

// list.insertAdjacentHTML("beforeend", foo(tweets));


// 4. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// // "Розкрити", при повторному натисканні текст знову стає доступним
// // і кнопка набуває початкового вигляду.

// const input = document.getElementById("passwordInput");
// const button = document.getElementById("passwordButton");

// button.addEventListener("click", () => {
//   if (button.textContent === "Приховати") {
//     button.textContent = "Розкрити";
//     input.style.color = "transparent"
//   } else {
//     button.textContent = "Приховати";
//     input.style.color = "black";
//   }
//   console.log(input.value);
// })


// 5. Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const button = document.getElementById("double");
const listItems = document.querySelectorAll(".listItem")

button.addEventListener("click", () => {
  listItems.forEach(item => {
    item.textContent *= 2;
  })
})
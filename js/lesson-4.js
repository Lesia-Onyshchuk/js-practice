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

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const form = document.createElement("div");
changeStyle();
document.body.append(form);

form.addEventListener("click", changeStyle);

function changeStyle() {
  form.style.cssText = forms[randomither(forms.length)];
  form.style.backgroundColor = getRandomHexColor();
  form.style.position = "absolute";
  form.style.top = `${randomither(100)}%`;
  form.style.left = `${randomither(100)}%`;
}

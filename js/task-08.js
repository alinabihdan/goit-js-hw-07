// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано
// в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('[type="number"]'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxesRef: document.querySelector("#boxes"),
};

let amount = 0;
let width = 20;
let height = 20;

function createBoxes(amount) {
  amount = refs.input.value;
  const array = [];

  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.style.backgroundColor = randomColor();
    array.push(newDiv);
  }

  return refs.boxesRef.append(...array);
}

function destroyBoxes() {
  refs.boxesRef.innerHTML = "";
  refs.input.value = "";
  amount = 0;
  width = 20;
  height = 20;
}

const randomColor = () => {
  return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
};

// слушатели
refs.btnRender.addEventListener("click", () => {
  createBoxes(amount);
  refs.input.value = "";
});
refs.btnDestroy.addEventListener("click", destroyBoxes);

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну
// операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
{
  /* <ul id="ingredients"></ul>; */
}
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("ingredients__item");
  itemEl.textContent = ingredient;

  return itemEl;
});

console.log(elements);

ingredientsListEl.append(...elements);

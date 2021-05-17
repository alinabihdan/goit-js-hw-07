// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и
// количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const ListRef = document.querySelector("#categories");
const categoriesRef = ListRef.children;

const countCategories = (list) => {
  return `В списке ${categoriesRef.length} категории.`;
};

console.log(countCategories(ListRef));

const findTitleAndSubcategories = (categorie) => {
  const titleRef = categorie.firstElementChild;
  const sublist = categorie.querySelector("ul");
  const subcategories = sublist.children;
  return `Категория: ${titleRef.textContent}
Количество элементов: ${subcategories.length}`;
};

console.log(findTitleAndSubcategories(categoriesRef[0]));
console.log(findTitleAndSubcategories(categoriesRef[1]));
console.log(findTitleAndSubcategories(categoriesRef[2]));

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  spanRef: document.querySelector("#value"),
  btnIncrementRef: document.querySelector('[data-action="increment"]'),
  btnDecrementRef: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

function increment() {
  counterValue += 1;
  refs.spanRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.spanRef.textContent = counterValue;
}

refs.btnIncrementRef.addEventListener("click", increment);
refs.btnDecrementRef.addEventListener("click", decrement);

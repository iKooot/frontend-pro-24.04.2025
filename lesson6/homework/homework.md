# HW 6.1

## Написати функцію видалення масиву символів

Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

```js
const message = prompt("Enter yor strinng");
const chars = prompt("Enter some chars for removing");

// function foo(string: string, arr: Array<string>): string
function foo(string, arr) {
  // yor awesome code
  // string => ng => stri
  // string => ["t", "g"] => srin
  return;
}

const result = foo(message, chars);

alert(result);
```

# HW 6.2

## Визначення середнього арифметичного.

Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

```js
const array = [{}, 1, 2, 3, 4, 5, 6, "string", null];

function foo(array) {
  // yor awesome code
  return;
}

const result = foo(array);

console.log(result);
```

# HW 6.3

## Функція видалення елементу

Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

```js
const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  // yor awesome code
  return array;
}

removeElement(array, 4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
```

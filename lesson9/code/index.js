/************************************************************
recursion
************************************************************/

/*
1. function is runing
2. context is attaouth and saveing
3. function is on pouse
4. .....
5. base functionn is runnig
6. return value
*/

// make function pow

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(2, 2));

// function pow(x, n) {
//   if (n === 1) return x;

//   return pow(x, n - 1);
// }

// console.log(pow(2, 4));

/************************************************************
task
************************************************************/

/*
Створити конструктор, для роботи з числом користувача "n" (за замовчуванням 6):

метод визначення суми натуральних чисел до “n” (1+2+...+n); // 21
метод визначення факторіалу (добуток натуральних чисел від одиниці) з “n” (1*2*...*n); // 720
метод зведення числа “n” у ступінь “m” (2^2 = 2*2, 2^3 = 2*2*2, 2^4 = 2*2*2*2)
пошук "n" числа Фібоначчі * (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) // 8

Умови
Число "n" більше або дорівнює нулю
Якщо користувач вводить менше нуля, віддавати ‘Error!’ на всіх методах
Число вводить користувач (за замовчуванням 6)
Усі методи (крім ступеня) можна викликати з будь-яким числом "n". Але за умовчанням, те, що вводив користувач при ініціалізації
 */

// function NumberOperations(n = 6) {
//   if (n < 0) {
//     console.error("Error!");
//     return;
//   }

//   this.n = n;
//   this.sum = function () {
//     let result = 0;

//     for (let i = 0; i <= this.n; i++) {
//       result += i;
//     }

//     return result;
//   };

//   this.factorial = function () {
//     let result = 1;

//     for (let i = 1; i <= this.n; i++) {
//       result *= i;
//     }

//     return result;
//   };

//   this.pow = function (m = 1) {
//     let result = this.n;

//     for (let i = 1; i < m; i++) {
//       result *= this.n;
//     }

//     return result;
//   };

//   this.fibanaci = function () {
//     if (this.n === 0) return 0;
//     if (this.n === 1) return 1;

//     let a = 1,
//       b = 1;

//     for (let i = 2; i <= this.n; i++) {
//       let temp = b;
//       b = a + b;
//       a = temp;
//     }

//     return a;
//   };
// }

// const number = new NumberOperations();

// console.log(number.sum());
// console.log(number.factorial());
// console.log(number.pow());
// console.log(number.fibanaci());

/************************************************************
arrays
************************************************************/

const users = [
  { name: "Serhii", id: 1 },
  { name: "Oleksandr", id: 2 },
];

users.forEach((el) => console.log(el));
const newArray = users.map((el, i) => ({ ...el, active: i % 2 === 0 }));
newArray.forEach((el) => console.log(el));
const filteredArray = newArray.filter((el) => el.active);
filteredArray.forEach((el) => console.log(el));
const user = newArray.find((el) => el.active);
console.log(
  "index =>",
  newArray.findIndex((el) => el.active),
);
console.log(user);
const calcUser = newArray.reduce(
  (acc, el) => {
    acc.count += 1;
    acc.users.push(el);

    return acc;
  },
  { count: 0, users: [] },
);
console.log(calcUser);
console.log([20, 30, 40].reduce((sum, val) => sum + val, 0));
const someActive = newArray.some((el) => el.active);
console.log(someActive);
const everyActive = newArray.every((el) => el.active);
console.log(everyActive);
const digits = [
  [1, 2],
  [3, 4],
  [5, [6]],
];
const newDigits = digits.flat(2);
console.log(newDigits);
const phrase = ["Hello world"];
const words = phrase.flatMap((p) => p.split(" "));
console.log(words);
console.log(["a", 2, null].includes(null));
const numbers = [10, 3, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);
const strings = ["Serhii", "Oleksandr", "Anna"];
strings.sort((a, b) => a.localeCompare(b));
console.log(strings);
const objects = [{ name: "Serhii" }, { name: "Oleksandr" }, { name: "Anna" }];
objects.sort((a, b) => a.name.localeCompare(b.mane));
console.log(objects);
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);
arr.splice(0, 1);
console.log(arr);
console.log(new Array(10).fill(null));
// const numbers2 = [10, 3, 5];
// console.log(numbers2.toSorted());
// console.log(numbers2.toReversed());
console.log([1, 2, 3].concat([4, 5, 6]));

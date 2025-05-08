// for
// while
// do while

//  while
// key = while
// condition = ()
// body = {}

// while (true) { // infinity
//   console.log("hello");
// }

// while
// let i = 0;
// console.log("before");

// while (i < 100) {
//   i++;
//   console.log(i);
// }

// console.log("after");
// do while

// let i = 0;
// console.log("before", i);
// do {
//   i++;
//   console.log(i);
// } while (i < 100);

// console.log("after", i);

// let isFinished = true;

// do {
//   isFinished = confirm("Do you whant to continue?");
// } while (isFinished);

// let isFinished = true;

// while (isFinished) {
//   isFinished = confirm("Do you whant to continue?");
// }

// const str = "string";

// let i = 0;

// while (i < str.length) {
//   console.log(str[i]);
//   i++;
// }

// for

// let digit = 1;
// digit += 100;

// let str = 'Hello';
// str += ' '
// str += 'world';

// for (;;) {}

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   console.log(b);
// }

// for (let i = 0, b = 10; i < 5 && b > 6; i += 0.5, b -= 1) {
//   console.log(i);
//   console.log(b);
// }
// let i = 0;

// for (; i < 100; ) {
//   i++;
//   connsole.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("before", i);
//   if (i === 9) break;
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// identifiers
// const time = Date.now();
// console.log(time);

// outer: for (let i = 0; i < 5; i++) {
//   console.log(`i => ${i}`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`j => ${j}`);
//     // if (i === 2) break outer;
//     if (i % 2 === 0) continue outer;
//   }
// }

// console.log("time in ms =>", Date.now() - time);

// for of [] - only for iterable

// const str = "string";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (const char of str) {
//   console.log(char);
// }

// for (const digit of [1, 2, 3, 4, 5]) {
//   console.log(digit);
// }

// for (const digit of new Set([1, 2, 3, 4, 5])) {
//   console.log(digit);
// }

// for (const digit of 12345) { // error
//   console.log(digit);
// }

// for (const key of { key: "value" }) {
//   // error
//   console.log(key);
// }

// for in {}

// const str = "string";
// for (const char in str) {
//   console.log(char);
// }

// for (const digit in [1, 2, 3, 4, 5]) {
//   console.log(digit);
// }

// for (const digit in 12345) {
//   console.log(digit);
// }

// const annimal = { legs: 4 };
// const cat = { name: "KuSb", speed: 10, __proto__: annimal };

// for (const key in cat) {
//   if (cat.hasOwnProperty(key)) {
//     console.log(cat[key]);
//   }
// }

// for (const key in { key: "value" }) {
//   console.log(key);
// }

// in

// const cat = { name: "KuSb" };

// if ("age" in cat) {
//   console.log("Exist");
// } else {
//   console.log("Not exist");
// }

// Arrays
// const arr = Array(1, 2, 3, 4, 5);
// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(arr2);

// console.log(arr[0]);

// arr[100] = 100;
// arr.example = 1001;
// console.log(arr);

// const arr = [0];

// arr.push(1, 2, 3, 4);

// console.log(arr);

// const el = arr.pop();
// console.log(el);
// console.log(arr);

// arr.shift();
// arr.unshift(-1, -2);

// console.log(arr);

// const arr = [0, 1, 2, 3, 4];

// arr.forEach((el) => {
//   console.log(el);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const el of arr) {
//   console.log(el);
// }

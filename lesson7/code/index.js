// function foo() {} // Declaration
// const foo = function() {} // Expression
// function foo(a, b) {}
// foo(1, 2)

/************************************************************
callback
************************************************************/

// const arr = [1, 2, 3];

// const newArr = arr.map(function (el, i, arr) {
//   console.log("el =>", el);
//   console.log("i =>", i);
//   console.log("array =>", arr);

//   return el + 1;
// });

// console.log(newArr);

// function myMap(array, cb) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = cb(array[i], i, array);
//   }

//   return newArray;
// }

// arr.forEach((el) => {
//   console.log(el);
// });

// function myForEach(array, cb) {
//   for (let i = 0; i < array.length; i++) {
//     cb(array[i], i, array);
//   }

//   return;
// }

// function mult(el, i, arr) {
//   console.log("el =>", el);
//   console.log("i =>", i);
//   console.log("array =>", arr);

//   return el * 2;
// }

// function logger(el) {
//   console.log(el);
//   return el;
// }

// console.log(arr);
// console.log(myMap(arr, mult));
// console.log(myMap(arr, logger));
// console.log(myForEach(arr, logger));

// const arr = [1, 2, 3];

// function total(array) {
//   let result = 0;

//   array.forEach(function (el) {
//     result += el;
//   });

//   return result;
// }

// console.log(total(arr));

// const arr = [{ name: "Serhii" }, { name: "Oleksndr" }];

// const transformed = arr.reduce(
//   function (acc, el, i, array) {
//     // console.log("acc =>", acc);
//     // console.log("el =>", el);
//     // console.log("i =>", i);
//     // console.log("array =>", array);

//     const existingUser = acc.users.find(function (innerUser, i, arr) {
//       return innerUser.name === el.name;
//     });

//     if (!existingUser) {
//       acc.users.push(el);
//       acc.total += 1;
//     }

//     return acc;
//   },
//   { users: [], total: 0 },
// );

// console.log("result => ", transformed); // { total: 2, users: [{ name: "Serhii" }, { name: "Oleksndr" }] }

// const result = [1, 2, 3, 4, 5].reduce(function (acc, el) {
//   acc += el;
//   return acc;
// }, 0);

// console.log(result); // 15

// const array = [5, 1, 3, 2, 4];

// array.sort(function (a, b) {
//   if (a < b) return -1;
//   if (a > b) return -1;
//   return 0;
// });

// console.log(array);

/************************************************************
IIFE ()()
************************************************************/

// function foo(a, b) {
//   return a + b;
// }

// foo(1, 2);

// const result = (function (a, b) {
//   return a + b;
// })(1, 1);

// console.log(result);

/************************************************************
scope
************************************************************/
// // outer => null
// // a() => function
// // x => uninitialize
// // console => global
// let x; // x => undefined => global scope
// x = 5; // x = 5
// x = 10; // x = 10
// function a() {
//   // y => uninitialize
//   // x = 10
//   // b() => function
//   // console => global
//   let y = 5; // y = 5
//   function b() {
//     // z => uninitialize
//     // y => 5
//     // x = 10
//     // console => global
//     x = 0; // x = 0
//     let z = 1; // z = 1
//     console.log(x + y + z); // x = 0; y = 5; z = 1 => 0 + 5 + 1 = 6
//   }
//   b();
// }
// a(); // 6

/************************************************************
carrig
************************************************************/

// function(a, b) => fuction(a)(b)

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 1));

// function sum(a) {
//   return function (b) {
//     // debugger;
//     return a + b;
//   };
// }

// console.log(sum(1)(2));

// mult(1)(2)

// function mult(a) {
//   return function (b) {
//     debugger;
//     return a * b;
//   };
// }

// const duble = mult(2);
// const tripple = mult(3);

// console.log(tripple(6));
// console.log(duble(2));
// console.log(duble(4));
// console.log(duble(5));

/************************************************************
closure
************************************************************/

// function foo() {
//   const a = "example";

//   return function (example) {
//     console.log(example, a);
//   };
// }

// foo()(1);

// function counter(initialValue) {
//   let counter = initialValue ?? 1;

//   return function () {
//     debugger;
//     counter += 1;
//     return counter;
//   };
// }

// const counter1 = counter(5);
// counter1();
// counter1();
// const result = counter1();
// console.log(result);

// const counter2 = counter();
// const result2 = counter2();
// console.log(result2);

// function createPass(token) {
//   return function (password) {
//     return token + password;
//   };
// }

// const crypt = createPass("HeLLoW12345");
// const pass = crypt("Qwerty");

// console.log(pass);

/************************************************************
infinity
************************************************************/

function sum(a) {
  let currentSum = a;

  function add(b) {
    // debugger;
    currentSum += b;
    return add;
  }

  add.print = function () {
    return currentSum;
  };

  return add;
}

const total =
  sum(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1).print();
console.log(total);

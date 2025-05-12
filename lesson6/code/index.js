// key - function
// name - foo
// attrs - (atr1, atr2, ...)
// body - { ... }

// const a = "outer string";

// function foo() {
//   const a = "inner string";
//   console.log(a);
// }

// foo();

// let digit = 0;

// function foo() {
//   digit += 1;
// }

// foo();
// console.log(digit);

// const user = { name: "Serhii" };

// function foo() {
//   user.age = 34;
// }

// foo();
// console.log(user);

// function foo() {
//   const a = 1;

//   function bar() {
//     const b = 2;
//     console.log(a);
//   }
//   console.log(b);

//   bar();
// }

// foo();

// let a = 1;

// function foo() {
//   a = 2;

//   function bar() {
//     console.log(a); // 2
//   }

//   bar();
// }

// foo();

// function foo() {
//   a = 2; // BAD!!!!

//   function bar() {
//     console.log(a); // 2
//   }

//   bar();
// }

// foo();

/************************************************************
Function Declaration
************************************************************/
// foo();
// function foo() {}
/************************************************************
Function Expression
************************************************************/
// const foo = function() {
//   console.log("Hello, World!", test);
// };

// foo();

// const foo = function test() {
//   console.log("Hello, World!", test);
// };

// foo();

/************************************************************
args
************************************************************/
// let a = 1;

// function sum(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);
//   }

//   if (typeof a === "function" && typeof b === "function") {
//     console.log(a() + b());
//   }
// }

// a = 2;

// sum(a, 2);
// sum(
//   () => 1,
//   () => 1,
// );

// function foo() {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "number") continue;
//     result += arguments[i];
//   }

//   console.log(result);
// }

// foo(1, true, 3, 4, 5, 6, "fasdfs");

// let number = 1;
// let array = [1, 2, 3];

// function foo(a, b) {
//   // a = 3;
//   // b = 1;
//   array[3] = 4;
//   console.log("number", number);
//   console.log("array", array);
// }
// console.log(array);

// foo(number, array);

/************************************************************
return
************************************************************/

// function sum(a, b) {
//   if (typeof a !== "number" && typeof b !== "number") return;
//   // omit
//   return a + b;
// }

// const result = sum(1, 1);
// const result2 = sum("fasfsaf", null);
// console.log(result);
// console.log(result2);

/************************************************************
default
************************************************************/

// function printFullName(a = "Jhon", b = "Snow") {
//   console.log("a => ", a);
//   console.log("b => ", b);
// }

// // printFullName(null, undefined);

// const user = {
//   name: "Serhii",
// };

// printFullName(user.name, user.surname);
// printFullName(null, null);
// printFullName();

/************************************************************
!!!!
************************************************************/

// const foo = function () {};

// console.log(foo());

/************************************************************
function name
************************************************************/
// function === action
// function getUser() {
//   // db.findOne()
// }

// function createList(users) {
//   // document.creatElement('ul')
// }

// function getUsers() {
//   // db.findAll()
// }

// function createUser() {
//   // db.create()
// }

// function checkPassword() {
//   // /\w+/.test(value)
// }

// function init() {}

/************************************************************
debug
************************************************************/
// function sum(a, b) {
//   debugger;
//   return a + b;
// }

// console.log(sum(1, 2));

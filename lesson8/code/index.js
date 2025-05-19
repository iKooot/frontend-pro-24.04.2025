// "use strict";
/************************************************************
clear function
************************************************************/
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 1));
// console.log(sum(1, 1));

// let counter = 1;

// function foo() {
//   counter += 1;
// }

// foo();

// function foo(radius) {
//   return radius * radius * Math.PI;
// }

// function foo(radius, pi = Math.PI) {
//   return radius * radius * pi;
// }

// function foo() {
//   if (Math.random() > 0.5) return "string";

//   return "digit";
// }

// async function foo(url) {
//   return await fetch(url);
// }

// const myArray = [1, 3, 2];

// function sort(arr) {
//   // return arr.sort((a, b) => (a > b ? 1 : -1));
//   return [...arr].sort((a, b) => (a > b ? 1 : -1));
// }

// const newArray = sort(myArray);
// console.log(newArray);
// console.log(myArray);

// clear fuction + immutable => transparent

// function square(n) {
//   return n * 2;
// }

/************************************************************
array fuctions () => {}
************************************************************/

// function foo() {}
// const foo = function() {}
// () => {}

// const foo = (a, b) => {
//   return a + b;
// };
// const foo = (a, b) => a + b;

// const result = foo(1, 1);
// console.log(result);

// const bar = (n) => n * 2;

// const print = () => console.log("hello");

// const sum = (a) => (b) => a + b;
// const result = sum(1)(1);

// console.log(result);

// ((a) => {
//   console.log(a);
// })(1);

/************************************************************
obj
************************************************************/

// const user = {
//   name: "Serhii",
//   sayHi: function () {
//     console.log("Hello");
//   },
//   sayHi2() {
//     console.log("Hello");
//   },
//   sayHi3: () => console.log("hello"),
// };

// user.sayHi();
// user.sayHi2();
// user.sayHi3();
// console.log(user.name);

/************************************************************
this
************************************************************/
// console.log(this);

// (function foo() {
//   console.log(this);
// })();

// const user = {
//   name: "Serhii",
//   hobbies: ["Shooting"],
//   showHobbies: () => console.log(this),
//   showHobbies2() {
//     // console.log(this.name);
//     // console.log(this.hobbies);
//     this.hobbies.forEach(function (el) {
//       console.log(el);
//       console.log(this);
//       console.log(this.name);
//     });
//   },
//   showHobbies3() {
//     this.hobbies.forEach((el) => {
//       console.log(el);
//       console.log(this);
//       console.log(this.name);
//     });
//   },
// };

// user.showHobbies();
// user.showHobbies2();
// user.showHobbies3();

// const obj = {
//   name: "Serhii",
//   surname: "Savchuk",
//   showFullName() {
//     console.log(this.name + "-" + this.surname);
//   },
// };

// obj.showFullName();

/************************************************************
lost context
************************************************************/
// const user = {
//   name: "Serhii",
//   surname: "Savchuk",
//   showFullName() {
//     console.log(this.name + "-" + this.surname);
//   },
// };

// user.showFullName();
// setTimeout(user.showFullName, 1000);

// const obj = {
//   value: 2,
//   getValue() {
//     console.log(this.value);
//   },
// };

// function foo(cb) {
//   return cb();
// }

// foo(obj.getValue);

// const obj = {
//   value: 2,
//   getValue() {
//     console.log(this.value);
//   },
// };

// document.addEventListener("click", obj.getValue);

// const obj = {
//   value: 2,
//   outer() {
//     function inner() {
//       console.log(this.value);
//     }

//     inner();
//   },
// };

// obj.outer();

/************************************************************
bind, call, apply
************************************************************/

// func.bind(this, arg1, arg2 ....)

// const obj = {
//   value: 2,
//   outer() {
//     function inner(a, b) {
//       console.log("inner => ", this);
//       console.log(this.value);
//       console.log("inner => ", a + b);
//     }

//     // const newInner = inner.bind(this, 1, 2);
//     // newInner();
//     inner.call(this, 1, 2);
//     inner.apply(this, [1, 2]);
//   },
// };

// obj.outer();

// const user = {
//   name: "Serhii",
//   surname: "Savchuk",
//   showFullName() {
//     console.log(this.name + "-" + this.surname);
//   },
// };

// user.showFullName();
// setTimeout(user.showFullName.bind(user), 500);
// setTimeout(user.showFullName.bind({ name: "John", surname: "Snow" }), 1000);

/************************************************************
new
************************************************************/

// function User(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.fullName = `${name} ${surname}`;
//   this.hobiies = [1];

//   this.showInfo = () => {
//     console.log(this.name, this.surname);

//     this.hobiies.forEach(
//       function () {
//         console.log("this =>", this);
//       }.bind(this),
//     );
//   };
// }

// const user = new User("Serhii", "Savchuk");

// console.log(user);
// console.log(user.fullName);

// user.showInfo();

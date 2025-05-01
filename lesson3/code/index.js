// var a = "Serhii Savchuk";
// var b = "Serhii Savchuk";
// var c = "Serhii Savchuk";

// var a = 1,
//   b = 2,
//   c = 3;

// let d = 3,
//   e = 5;

// let digit = 1;

// digit += 1;

// digit = "string";

// digit = [];

// digit = {};

// digit += 2;

// console.log(digit);

// const $ = 1;
// const _ = 2;

// const thisIsVaribale = true; // good
// const User = function () {
//   // good
//   this.name = "Serhii";
// };
// const BASE_URL = "https://example.com"; // good
// const YaEsTbGrooot = "good"; // bad
// const a = 1;
// const A = 2;

// ke-bab-ca-se
// camelCase - any
// PascalCase - Classes or Constructors
// snake_case - constants

// console.log(c); // c = undefined

// console.log(a);

// {
//   //   console.log(a);
//   // start TDZ on the begining of block for var => a
//   // continue TDZ
//   let a = 1; // TDZ end
//   console.log(a); // TDZ does not exist
//   const b = 2;
//   var c = 3; // c = defoned
// }

// {
//   let a = 2;
//   const b = 2;
//   var c = 4;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 1;
// a = 2;

// console.log(a);

// const b = 1;
// b = 2;

// console.log(b);

/********* types *********/

/********* number *********/

// const digit = 1;
// const digit2 = 1.2;

// const number = 0.1 + 0.2;

// console.log(number);
// console.log(number.toFixed(1) == 0.3);

// console.log(NaN);
// console.log("string" / 2);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));

// console.log(1_000_000);
// console.log(10e2);

/********* boolean *********/

// true || false;

/********* string *********/

// const str = 'string"example';
// const str2 = "string'example";
// const str3 = `s\n\n\ttring ${1 + 2} ${(() => "example")()}`;

// console.log(str3);

/********* null *********/

// null

// [{ name: "Serhii", age: null }];

/********* undefined *********/

// undefined

// const db = [{ name: "Serhii", age: null }];

// console.log(db[0].hobbies);
// console.log(db[1]);

/********* BigInt *********/

// const bigInt = 10n;
// console.log(typeof bigInt);

/********* Symbol *********/

// const id = Symbol("id");

// const user = {
//   [id]: 1,
// };

// console.log(user);

/********* Symbol *********/

// const cat = {
//   name: "KuSb",
//   age: 2,
//   voice() {
//     console.log("Meow");
//   },
// };

// console.log(cat.name);
// cat.voice();

// cat.speed = 10;

// delete cat.speed;

// console.log(cat);

// function printInfo(user, surname) {
//   surname = "KuSbKuSb";
//   //   user.name = "KuSb";

//   //   console.log("inside function", user, surname);
//   const newUser = { ...user };
//   //   const string = JSON.stringify(user);
//   //   console.log(string);
//   //   const newUser = JSON.parse(string);
//   //   const newUser = Object.assign({}, user);

//   newUser.name = "KuSb";
//   newUser.hobbies.push("new hobby");
//   console.log("inside function", newUser, surname);
// }

// const hobbies = ["sport", "music", "art"];

// const user = {
//   name: "Serhii",
//   hobbies,
// };

// const surname = "Savchuk";

// printInfo(user, surname);

// console.log("outside function", user, surname);
// console.log("outside function", hobbies);

/********* typeof *********/

// console.log(typeof undefined);
// console.log(typeof null); // object
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof 10e2);
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof Symbol());
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {}); // funnction
// console.log(typeof Math);
// console.log(typeof String); // fuction

/********* typeof *********/

// let a = 1;
// let b = 1;

// console.log(++a); // 2
// console.log(b++); // 1

// console.log(--a); // 0
// console.log(b--); // 1

// let a = 1;

// a += 2;
// a -= 2;
// console.log(a);

/********* types transformation *********/

// const a = "12345.4332";
// console.log(+a);
// console.log(parseInt(a));
// console.log(parseFloat(a));
// console.log(Number(a));
// console.log(typeof +a); // string

// console.log(1 > 2);
// console.log(1 >= 2);
// console.log(1 < 2);
// console.log(1 <= 2);
// console.log(1 == 2); // try to convert
// console.log(1 === 2); // not do it

// console.log(0 == false);
// console.log(1 == true);
// console.log(1 >= true);

/********* Math *********/

// Math.floor(1.2); // 1
// Math.ceil(1.2); // 2
// Math.round(1.2); // 1
// Math.trunc(1.2); // 1

/********* Math *********/

// const str = "string";

// console.log(str.charAt(1));
// const firstChar = str[0];
// console.log(firstChar);

// Object

// Number String Symbol BigInt Boolean

// String('string') => string.toUpperCase() => 'STRING'

const resp = prompt("Enter your name", "Serhii");

console.log(resp);

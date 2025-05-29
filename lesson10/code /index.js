"use strict";
// const obj = {};
// const obj1 = Object();

// { [string]: any }
// const prefereces = {
//   isAdmin: false,
// };

// const digit = 6;

// const user = {
//   name: "Serhii",
//   prefereces,
//   digit,
// };

// prefereces.region = "GLOBAL";
// user.prefereces.isAdmin = true;
// user.digit = 1;

// console.log({ user });
// console.log(digit);
// console.log({ prefereces });

// const myKey = "key";

// function generateKey(prefix) {
//   return `key-${prefix}`;
// }

// const obj = {
//   0: "example",
//   name: "Serhii",
//   getName() {
//     console.log(this);
//   },
//   [myKey]: "exampleKey",
//   [generateKey(1)]: "example1",
//   [{}]: "exampleObj",
//   [3 - 1]: "example",
// };

// obj.example = "example";
// obj.example = "example2";
// obj[generateKey(2)] = "example3";

// console.log(obj.name);
// obj[1] = "example1";
// console.log(obj[myKey]);
// console.log({}.toString());

// obj.getName();

/************************************************************
delete
************************************************************/

// const hobbies = [{ shooting: true }];

// const user = {
//   name: "Serhii",
//   age: 34,
//   hobbies,
// };

// const result = delete user.hobbies;

// console.log(user);
// console.info(hobbies);
// console.log(result);

// // const { hobbies: myHobbies, ...rest } = user;
// // console.log(rest);

/************************************************************
in
************************************************************/

// object.key === undefined => true || false

// const user = {
//   name: "Serhii",
// };

// if ("age" in user) {
//   console.log(user.age);
// } else {
//   console.log(user.age);
// }

// user.hobbies?.forEach((hobbie) => {
//   console.log(hobbie);
// });

// console.log(user.preferences?.isAdmin);

// user.getInfo?.();

/************************************************************
strucredClone()
************************************************************/
// const hobbie = { example: "example" };
// const hobbies = [{ shooting: true }, hobbie];

// const user = {
//   name: "Serhii",
//   age: 34,
//   hobbies: structuredClone(hobbies),
// };

// console.log(user.hobbies[1] === hobbies[1]);
// console.log(user);
// console.log(hobbies);

/************************************************************
for
************************************************************/

// const user = {
//   name: "Serhii",
//   age: 34,
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// console.log(Object.keys(user));

// for (const key of Object.keys(user)) {
//   console.log(key);
//   console.log(user[key]);
// }

// Object.keys(user).forEach((key) => {
//   console.log(key);
//   console.log(user[key]);
// });

// for (const value of Object.values(user)) {
//   console.log(value);
// }

// Object.values(user).forEach((value) => {
//   console.log(value);
// });

// for (const entry of Object.entries(user)) {
//   console.log(entry);
// }

// Object.entries(user).forEach((entry) => {
//   console.log(entry);
// });

// const result = Object.entries(user).reduce((acc, entry) => {
//   acc[entry[0]] = {
//     value: entry[1],
//     isAwesome: true,
//   };
//   return acc;
// }, {});

// console.log(result);

// for (const [key, value] of Object.entries(user)) {
//   console.log("key =>", key);
//   console.log("value =>", value);
// }

/************************************************************
assign
************************************************************/

// const obj1 = {
//   name: "Serhii",
// };

// const obj2 = {
//   age: 34,
// };

// const obj3 = {
//   obj2,
//   hobbies: [],
// };

// // const combine = { ...obj1, ...obj3 };
// // console.log(combine);

// const combine2 = Object.assign({}, obj1, obj2, { isAdmin: true }, obj3);
// console.log(combine2);

/************************************************************
defineProperty
************************************************************/

// const obj = {
//   name: "Serhii",
// };

// const result = Object.defineProperty(obj, "age", {
//   value: 34,
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });

// obj.age = 2;
// delete obj.age;

// Object.defineProperty(obj, "hobbies", {
//   value: [],
//   writable: false,
//   configurable: false,
//   enumerable: true,
// });

// console.log(obj.hobbies);
// obj.hobbies.push("shooting");
// obj.hobbies = 1;
// delete obj.hobbies;

// Object.defineProperty(obj, "isAdmin", {
//   value: true,
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// console.log(obj.isAdmin);

// obj.isAdmin = 2; // error
// delete obj.isAdmin;

// console.log(result);
// console.log(result === obj);
// console.log(obj);

/************************************************************
defineProperties
************************************************************/

// const user = Object.defineProperties(
//   {},
//   {
//     name: {
//       value: "Serhii",
//       // writable: true,
//       configurable: true,
//       enumerable: true,
//     },
//     surname: {
//       value: "Savchuk",
//       // writable: true,
//       configurable: true,
//       enumerable: true,
//     },
//     age: {
//       value: "Serhii",
//       writable: true,
//       configurable: true,
//       enumerable: true,
//     },
//     hobbies: {
//       value: "Serhii",
//       enumerable: true,
//     },
//     isAdmin: {
//       value: true,
//     },
//     fullName: {
//       get() {
//         return `${this.name} ${this.surname}`;
//       },
//       set(value) {
//         const [name, surname] = value.split(" ");
//         this.name = name;
//         this.surname = surname;
//       },
//     },
//   },
// );

// console.log(user.fullName);
// user.fullName = "John Snow";
// console.log(user);
// console.log(user.fullName);

/************************************************************
freeze || seal
************************************************************/

// const cat = {
//   name: "KuSb",
// };

// const o = Object.freeze(cat);

// console.log(o === cat);
// console.log(Object.isFrozen(cat));
// cat.name = "KuSbKuSb";
// delete cat.name;

// const cat2 = structuredClone(cat);
// console.log(Object.isFrozen(cat2));

// const o = Object.seal(cat);

// console.log(o === cat);
// console.log(Object.isSealed(cat));

// cat.name = "KuSbKuSb";
// delete cat.name;
// console.log(cat);

/************************************************************
instanceof
************************************************************/

// function User(name) {
//   this.name = name;
// }

// const user = new User("Serhii");

// console.log(user instanceof User);
// console.log(user instanceof Object);
// console.log(user instanceof Function);
// console.log(user instanceof Array);

// console.log(user);

/************************************************************
hasOwnProperty
************************************************************/

// const animal = {
//   speed: 2,
// };

// const cat = {
//   name: "KeSb",
// };

// Object.setPrototypeOf(cat, animal);

// for (const key in cat) {
//   if (cat.hasOwnProperty(key)) {
//     console.log("for", key);
//   }
// }

// Object.keys(cat).forEach((key) => {
//   console.log("o keys", key);
// });

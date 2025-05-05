// alert("Hello world");
// const response = confirm("Do you agree");
// console.log(response);
// const response = prompt("Enter your name");
// console.log(response);

// MATH
// let digit = 1;
// digit += 1;
// digit -= 1;
// digit *= 1;
// digit /= 1;

// // a = b * q + r
// console.log(10 % 3); // 10 = 3 * 3 + 1
// console.log(15 % 3); // 15 = 3 * 5
// console.log(-7 % 3); // -7 = 3 * -2 + -1

// function isEven(number) {
//   return number % 2;
// }

// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));

// console.log(Math.trunc(12345 * 0.1));
// console.log(12345 % 10);
// console.log(12345 % 100);
// console.log(12345 % 1000);
// console.log(12345 % 10000);
// console.log(12345 % 100000);

// console.log(2 ** 2);

// 0000 = 0
// 0001 = 1
// 0010 = 2
// 0011 = 3
// & | ^ ~ << >> >>>

// let digit = 1 + 2 + 1; // 1 + 2 = 3 + 1 = 4

// console.log(1 == 1);

// Logig operations
// &&  || !

// // falsy
// console.log(Boolean(false));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// // true
// console.log(Boolean([]));
// console.log(Boolean([1]));
// console.log(Boolean({}));
// console.log(Boolean({ key: "example" }));
// console.log(Boolean(true));
// console.log(Boolean(" "));
// console.log(Boolean("0"));

// &&
// console.log(true && true && ""); // true && true && false
// console.log({} && 0 && 12); // true && false && ture
// console.log(1 && 2 && 0); // 0
// console.log([] && 12 && "Hello world"); // "Hello world"

// ||
// console.log("0" || "1" || 1); // "0"
// console.log(false || true || false); // true
// console.log(0 || null || "Hello world"); // "Hello world"
// console.log(1 || "" || 2); // 1
// console.log(null || undefined || 0); // 0

// !
// console.log(!0);
// console.log(!true);
// console.log(!!{ key: 1 });
// console.log(Boolean({ key: 1 }));

// === | ==
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false

// console.log(
//   JSON.stringify({ key: "value" }) === JSON.stringify({ key: "value" }),
// );
// console.log({ key: "value" } == { key: "value" });

// ?? null || undefined

// let user = null;
// user = undefined;
// // user = 1;

// const defaultUser = { name: "Serhii" };
// console.log(user ?? defaultUser);

// if

// const shoulShowAlert = confirm("Should i need to show notification?");

// if (shoulShowAlert) {
//   alert("hello world!");
// }

// if (shoulShowAlert) alert("hello world!");

// if (true && false) alert("hello world!");
// if (10 % 2 === 0) alert("hello world!");

// const choise = prompt("Choose your fruit", "apple");

// if (choise === "apple") {
//   alert("Your choise is an apple");
// } else if (choise === "banana") {
//   alert("Your choise is an banana");
// } else {
//   alert(`Your fruit is ${choise}`);
// }

// if (1 > 0) {
//   alert("1 is bigger");
// } else {
//   alert("1 is less");
// }

// 1 > 0 ? alert("1 is bigger") : alert("1 is less");

// const number = 1 > 0 ? 1 : 2;
// console.log(number);

// switch case
// const color = prompt("Enter your color", "red");

// if (color === "red") {
//   console.log("This is red");
// } else if (color === "white") {
//   console.log("This is red");
// } else {
//   console.log("I dont know this color");
// }

// switch (color) {
//   case "white":
//     console.log("This is white");
//     break;
//   case "red":
//     console.log("This is red");
//     break;
//   case "black":
//   case "yellow":
//   case "green":
//     console.log("I know this color");
//     break;
//   default:
//     console.log("I dont know this color");
//     break;
// }

// const message = prompt("Enter your message", "");

// switch (true) {
//   case !!message: // Boolean(message)
//     console.log(message);
// }

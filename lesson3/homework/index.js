// HW3.1
const message1 = prompt("Enter first message", "");
const message2 = prompt("Enter second message", "");
const message3 = prompt("Enter third message", "");

console.log(
  `First message: ${message1}\nSecond Message: ${message2}\nThird message: ${message3}`,
);

// HW3.2
const string = "String";
const number = 1;
const boolean = true;
const myNull = null;
let myUndefined;
const symbol = Symbol("example");
const bigInt = 1n;
const object = Object();
const message4 = `JS types:\n\n${typeof string}\n${typeof number}\n${typeof boolean}\n${myNull}\n${typeof myUndefined}\n${typeof symbol}\n${typeof bigInt}\n${typeof object}`;
console.log(message4);

// HW3.3 
const number1 = String(10369);
const message5 =
  number1[0] +
  " " +
  number1[1] +
  " " +
  number1[2] +
  " " +
  number1[3] +
  " " +
  number1[4];
console.log(message5);
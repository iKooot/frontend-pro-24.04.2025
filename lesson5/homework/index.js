/****************************************
 * HW 5.1
 ****************************************/
let result = "";

for (let i = 20; i <= 30; i += 0.5) {
  result += `${i} `;
}

alert(result.trim());

/****************************************
 * HW 5.2
 ****************************************/

const currency = prompt("Choose currency:\n\n1. Euro - €.\n2. Dollar - $");
const EURO_COURSE = 41.99;
const DOLLAR_COURSE = 39.34;
let result = "";

for (let i = 10; i <= 100; i += 10) {
  switch (currency && currency.toLowerCase()) {
    case "euro":
    case "€":
    case "1": {
      result += `${i}€ = ${Math.round(i * EURO_COURSE)}₴;\n`;
      break;
    }
    case "dollar":
    case "$":
    case "2": {
      result += `${i}$ = ${Math.round(i * DOLLAR_COURSE)}₴;\n`;
      alert(result);
      break;
    }
    default: {
      result = "I dont recognize currency, enter valid currency like 1 or Euro";
      break;
    }
  }
}

alert(result);

/****************************************
 * HW 5.3
 ****************************************/

const digit = prompt("Enter your digit");

if (digit && Number.parseInt(digit)) {
  for (let i = 1; i <= 100 && digit >= i ** 2; i++) {
    console.log(i);
  }
} else {
  alert("Please enter valid digit");
}

/****************************************
 * HW 5.4
 ****************************************/
let shouldCheck = true;

do {
  const digit = prompt("Enter your digit");
  let isPrime = true;

  if (digit && Number.parseInt(digit)) {
    for (let i = 2; i <= Math.sqrt(Number.parseInt(digit)); i++) {
      if (digit % i === 0) {
        isPrime = false;
      }
    }
  } else {
    if (digit === null) break;

    alert("You enter invalid digit");
    continue;
  }

  alert(`Digit ${digit} is ${isPrime ? "prime" : "not prime"}`);

  shouldCheck = confirm("Do you want to check another digit?");
} while (shouldCheck);

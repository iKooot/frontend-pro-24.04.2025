/****************************************
 * HW 6.1
 ****************************************/

const message = prompt("Enter some string", "Hello world.");
const chars = prompt("Enter some subString for removing.");

function stringTransformer(string, data = "") {
  if (!data.length) return string;

  if (typeof data === "string" && checkChars(string, data)) {
    return removeSubString(string, data);
  }

  let newString = string;

  for (const char of data) {
    if (typeof char !== "string" && !checkChars(newString, char)) continue;

    newString = removeSubString(newString, char);
  }

  return newString;
}

function removeSubString(string, subString) {
  if (typeof string !== "string")
    throw new Error("Checking string must to be the string data.");
  if (typeof subString !== "string")
    throw new Error("Checking subString must to be the string data.");

  let result = "";
  let i = 0;

  while (i < string.length) {
    let match = true;

    for (let j = 0; j < subString.length; j++) {
      if (string[i + j] !== subString[j]) {
        match = false;
        break;
      }
    }

    if (!match) {
      result += string[i];
      i++;
      continue;
    }

    i += subString.length;
  }

  return result;
}

function checkChars(string, subString) {
  if (typeof string !== "string")
    throw new Error("Checking string must to be the string data.");
  if (typeof subString !== "string")
    throw new Error("Checking subString must to be the string data.");

  let searchIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== subString[searchIndex]) {
      searchIndex = 0;
      continue;
    }

    searchIndex++;
    if (searchIndex === subString.length) {
      return true;
    }
  }

  return false;
}

const result = stringTransformer(message, chars);
const result2 = stringTransformer("Hello", ["w", "l"]);

console.log(result);
console.log(result2);

/****************************************
 * HW 6.2
 ****************************************/

const array = [{}, 1, 2, 3, "string", null, []];

function averageOfNumbers(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === "number" && Number.isFinite(item)) {
      sum += item;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

console.log(averageOfNumbers(array));

/****************************************
 * HW 6.3
 ****************************************/

function removeElement(array, item) {
  let writeIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }

  array.length = writeIndex;
}

const array = [1, "text", { key: "value" }, true, "text", null, 42];
removeElement(array, array[2]);
removeElement(array, true);
removeElement(array, "example");

console.log(array); // Результат: [1, "text", "text", null, 42]

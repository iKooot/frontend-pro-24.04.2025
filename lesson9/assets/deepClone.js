function deepCloe(data) {
  if (data === null || typeof data !== "object") return data; // база

  if (Array.isArray(data)) {
    // крок 1
    const cloneArray = [];

    for (let i = 0; i < data.length; i++) {
      cloneArray[i] = deepCloe(data[i]);
    }

    return cloneArray;
  }

  if (typeof data === "object") {
    // крок 2
    const cloneObj = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        cloneObj[key] = deepCloe(data[key]);
      }
    }

    return cloneObj;
  }
}

const newUser = deepCloe(user);

console.log("newUser =>", newUser);
console.log("user =>", user);

console.log(newUser.educations === user.educations);
console.log(newUser.hobbies === user.hobbies);
console.log(newUser.educations[0] === user.educations[0]);

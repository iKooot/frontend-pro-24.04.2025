function findFile(fileName, data) {
  for (const items of data) {
    if (items.file === fileName) return true;

    if (items.folder) {
      debugger;
      if (findFile(fileName, items.folder)) return true;
    }
  }

  return false;
}

console.log(findFile("homework-pro1", documents));

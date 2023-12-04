const fs = require("fs");
const filePath = "data.txt";

// Continue with reading the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  const flags = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let words = [];
  let result = [];
  let dum = [];
  let found = 0;
  data
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => words.push(line));

  let sep = words.map((word) => word.split(""));
  let filteredSep = sep.map((letters) =>
    letters.filter((char) => !isNaN(char))
  );
  for (let i = 0; i < filteredSep.length; i++) {
    if (filteredSep[i].length == 1) {
      dup = filteredSep[i][0];
      filteredSep[i].push(dup);
    } else if (filteredSep[i].length === 3) {
      const middleIndex = Math.floor(filteredSep[i].length / 2);
      filteredSep[i].splice(middleIndex, 1);
    } else if (filteredSep[i].length > 3) {
      first = filteredSep[0];
      last = filteredSep[filteredSep.length - 1];
      filteredSep[i] = filteredSep[i].filter(
        (num, index) => index === 0 || index === filteredSep[i].length - 1
      );
    }
  }

  console.log(filteredSep);
  let sum = 0;
  let concatenatedStrings = filteredSep.map((set) => set.join(""));
  console.log(concatenatedStrings);
  sum = 0;
  result = concatenatedStrings.map((i) => (sum += Number.parseInt(i)));
  console.log(result[result.length - 1]);
});

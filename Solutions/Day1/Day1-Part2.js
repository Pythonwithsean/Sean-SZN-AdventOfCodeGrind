const fs = require("fs");
const filePath = "data.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  let map = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
  ]);

  let result = [];
  let dummy = "";
  let counter = 0;
  let words = data;
  let k = words.replace(/\r/g, "").split("\n");

  let concatenatedStrings = []; // Array to store the concatenated strings

  for (let i = 0; i < k.length; i++) {
    let line = k[i];
    let lineResult = [];
    counter = 0;

    // Sort map keys by length in descending order
    let sortedKeys = Array.from(map.keys()).sort((a, b) => b.length - a.length);

    while (counter < line.length) {
      dummy += line[counter];
      counter += 1;

      if (map.has(dummy)) {
        lineResult.push(map.get(dummy));
        line = line.slice(counter, line.length);
        dummy = "";
        counter = 0;
      } else {
        for (let key of sortedKeys) {
          if (dummy.includes(key)) {
            dummy = key;
            if (map.has(dummy)) {
              lineResult.push(map.get(dummy));
              line = line.slice(counter, line.length);
              dummy = "";
              counter = 0;
            }
          }
        }
      }
    }

    // Get the first and last numbers for the current line
    let firstNumber = lineResult.length > 0 ? lineResult[0] : 0;
    let lastNumber =
      lineResult.length > 0 ? lineResult[lineResult.length - 1] : 0;

    // Concatenate and add the current line result to the array
    let lineConcatenation = String(firstNumber) + String(lastNumber);
    concatenatedStrings.push(lineConcatenation);

    console.log(
      `Line ${
        i + 1
      }: First Number: ${firstNumber}, Last Number: ${lastNumber}, Concatenated String: ${lineConcatenation}`
    );
    console.log("---");
  }

  // Calculate and print the sum
  let sum = concatenatedStrings.reduce((acc, str) => acc + parseInt(str), 0);
  console.log(`Sum of concatenated string values: ${sum}`);
});

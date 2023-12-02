const fs = require("fs");

const filePath = "data.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Function to replace spelled-out digits with numbers
  const replaceSpelledOutDigits = (line) => {
    const digitMap = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    // Replace spelled-out digits with numbers
    return line.replace(
      /one|two|three|four|five|six|seven|eight|nine/g,
      (match) => digitMap[match]
    );
  };

  // Function to extract the real first and last digits from a line
  const extractDigits = (line) => {
    // Extract the first and last digits
    const firstDigit = parseInt(line[0]);
    const lastDigit = parseInt(line[line.length - 1]);

    return [firstDigit, lastDigit];
  };

  // Split the data into lines
  const lines = data.split("\n");

  // Sum of calibration values
  let sum = 0;

  // Process each line and update the sum
  lines.forEach((line) => {
    // Replace spelled-out digits with numbers
    const lineWithNumbers = replaceSpelledOutDigits(line);

    // Extract first and last digits
    const [firstDigit, lastDigit] = extractDigits(lineWithNumbers);

    // Check if both firstDigit and lastDigit are valid numbers
    if (!isNaN(firstDigit) && !isNaN(lastDigit)) {
      const concatenatedValue = parseInt("" + firstDigit + lastDigit);
      sum += concatenatedValue;
    }
  });

  console.log("Sum of all calibration values:", sum);
});

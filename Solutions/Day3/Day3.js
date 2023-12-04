const fs = require("fs");
const { join } = require("path");
const pathName = "data.txt";

fs.readFile(pathName, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    lines = data.toString().replace(/\r/g, "").replace(" ", "").split("\n");

    i = 0;
    counter = 0;

    for (let line = 0; line < lines.length; line++) {
      let Line = lines[line];
      const result = new Map();
      for (x = 0; x < Line.length; x++) {
        let joinedNumbers = "";

        range = 3;
        if (!isNaN(Number.parseInt(Line[x]))) {
        } else if (Line[x] == ".") {
        } else {
          left = x - 1;
          right = x + 1;
          up = lines[line - 1];
          down = lines[line + 1];
          diagonaldownright = lines[line + 1][x + 1];
          diagonaldownleft = lines[line + 1][x - 1];
          diagonalupright = lines[line - 1][x + 1];
          diagonalupleft = lines[line - 1][x - 1];
          joinedNumbers = "";

          if (!isNaN(Number.parseInt(Line[left]))) {
            for (let i = 0; i < range; i++) {
              if (!isNaN(Number.parseInt(Line[left - i]))) {
                joinedNumbers += Line[left - i];
                joinedNumbers = joinedNumbers.split("").reverse().join("");
              }
            }
          }
          if (!isNaN(Number.parseInt(Line[right]))) {
            for (let i = 0; i < range; i++) {
              if (!isNaN(Number.parseInt(Line[right + i]))) {
                joinedNumbers += Line[right + i];
                num = joinedNumbers;
              }
            }
          }
          if (!isNaN(Number.parseInt(up[x]))) {
            joinedNumbers += up[x];
          }
          if (!isNaN(Number.parseInt(down[x]))) {
            joinedNumbers += down[x];
          }
          if (!isNaN(Number.parseInt(diagonaldownright))) {
          }
          if (!isNaN(Number.parseInt(diagonaldownleft))) {
          }
          if (!isNaN(Number.parseInt(diagonalupright))) {
          }
          if (!isNaN(Number.parseInt(diagonalupleft))) {
          }

          console.log(result);
        }
      }
    }
  }
});

// for (let i = 0; i < Line.length; i++) {
//   if (!isNaN(Number.parseInt(Line[i]))) {
//     symbol.set(i + 1, Line[i]);
//   } else if (Line[i] == ".") {
//     symbol.set(i + 1, Line[i]);
//   } else {
//     symbol.set(i + 1, Line[i]);
//   }
// }

// let arr = Array.from(symbol.entries());
// console.log(arr);

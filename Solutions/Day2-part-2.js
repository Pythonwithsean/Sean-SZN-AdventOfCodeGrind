const fs = require("fs");
pathName = "day2Data.txt";

fs.readFile(pathName, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    data = data.toString().replace(/\r/g, "");
    const lines = data.split("\n");
    let totalMulti = 0; // Initialize the variable to store the cumulative sum

    for (let i = 0; i < lines.length; i++) {
      result = [];
      const gameInfo = lines[i].replace(/^Game \d+: /, "");
      let red = [];
      let blue = [];
      let green = [];
      const records = gameInfo.split(";");

      for (let setsIndex = 0; setsIndex < records.length; setsIndex++) {
        const sets = records[setsIndex].split(",");

        gameTracker = new Map();
        for (let l = 0; l < sets.length; l++) {
          const set = sets[l].trim();
          const value = set.slice(0, 2).trim();
          const color = set.slice(1).trim();

          if (color.includes("red")) {
            red.push(value);
          } else if (color.includes("blue")) {
            blue.push(value);
          } else if (color.includes("green")) {
            green.push(value);
          }
        }
      }

      maxRed = Math.max(...red);
      maxBlue = Math.max(...blue);
      maxGreen = Math.max(...green);
      multi = maxRed * maxBlue * maxGreen;
      totalMulti += multi; // Accumulate the multi values for each game
      console.log(`Game ${i + 1}: ${multi}`);
    }

    console.log(`Total Multi: ${totalMulti}`);
  }
});

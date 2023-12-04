const fs = require("fs");
const pathName = "day2Data.txt";

fs.readFile(pathName, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const gameRecords = new Map();
  const cleanedData = data.toString().replace(/\r/g, "");
  const gameData = cleanedData.split("\n");
  const ValidGames = [];
  const tracker = new Map();
  const subset = new Map();

  for (let i = 0; i < gameData.length; i++) {
    const gameInfo = gameData[i].replace(/^Game \d+: /, "");
    const records = gameInfo.split(";");

    let isGameValid = true;

    for (let j = 0; j < records.length; j++) {
      const sets = records[j].split(",");
      let redCount = 0;
      let greenCount = 0;
      let blueCount = 0;

      console.log("sets:", sets);
      for (let k = 0; k < sets.length; k++) {
        const set = sets[k].trim().split(" ");

        const color = set[1];

        const count = parseInt(set[0]);

        if (color === "red") redCount += count;
        else if (color === "green") greenCount += count;
        else if (color === "blue") blueCount += count;
      }

      // Check conditions for each set within a game
      if (redCount > 12 || greenCount > 13 || blueCount > 14) {
        isGameValid = false;
        break; // No need to check other sets in the same game
      }
    }

    if (isGameValid) {
      ValidGames.push(i + 1); // Add the game ID to the ValidGames array
    }
  }

  // Sum all the valid game IDs
  const sumValidGames = ValidGames.reduce((acc, id) => acc + id, 0);

  console.log("Valid Games:", ValidGames);
  console.log("Sum of Valid Game IDs:", sumValidGames);
});

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
  const invalidTracker = new Map();
  const InvalidGames = [];
  validTracker = new Map();
  const tracker = new Map();

  for (let i = 0; i < gameData.length; i++) {
    const game = gameData[i].split(" ");
    let gameID = game.slice(0, 2).join(" ");
    gameRecords.set(gameID, game.slice(2));
  }

  for (let i = 0; i < gameData.length; i++) {
    const gameRecord = gameRecords.get(
      gameData[i].split(" ").slice(0, 2).join(" ")
    );
    if (!gameRecord) {
      console.warn(`Game record not found for ${gameData[i]}`);
      continue;
    }

    let red = 0;
    let green = 0;
    let blue = 0;

    for (let value = 0; value < gameRecord.length; value++) {
      switch (gameRecord[value]) {
        case "red,":
        case "red;":
        case "red":
        case "red.":
          red += Number.parseInt(gameRecord[value - 1]);

          break;
        case "green,":
        case "green;":
        case "green":
        case "green.":
          green += Number.parseInt(gameRecord[value - 1]);

          break;
        case "blue,":
        case "blue;":
        case "blue":
        case "blue.":
          blue += Number.parseInt(gameRecord[value - 1]);

          break;
      }
    }

    tracker.set(i + 1, [red, green, blue]);

    if (red <= 12 && green <= 13 && blue <= 14) {
      ValidGames.push(i + 1);
      validTracker.set(i + 1, [red, green, blue]);
    } else {
      InvalidGames.push(i + 1);
      invalidTracker.set(i + 1, [red, green, blue]);
    }

    // console.log("Game", i + 1, "red:", red, "green:", green, "blue:", blue);
  }
  //   const result = ValidGames.reduce((acc, curr) => acc + curr, 0);
  const result = ValidGames.reduce((acc, curr) => {
    const gameId = parseInt(gameData[curr - 1].split(" ")[1]);
    return acc + gameId;
  }, 0);

  console.log("Valid Games:", validTracker);

  console.log(result);

  //   console.log("Invalid Games:", InvalidGames, invalidTracker);
});

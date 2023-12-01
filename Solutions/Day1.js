const fs = require("fs");
const filePath = "../data.txt";

if (!fs.existsSync(filePath)) {
  console.error("Error: File not found");
  return;
}

// Continue with reading the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Process the file data here
  console.log("File contents:", data);
});

const fs = require("fs");

// Function to read data from file
const readData = () => {
  const data = fs.readFileSync("./DB/prototype.json");
  return JSON.parse(data) || [];
};

// Function to write Data back to the file
const writeData = (Data) => {
  const updatedData = JSON.stringify(Data, null, 2);
  fs.writeFileSync("./DB/prototype.json", updatedData);
  console.log("Data has been added successfully.");
};

module.exports = {
  readData,
  writeData,
};

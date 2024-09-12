const fs = require("fs");
const DataManager = require("../Data/DataEvents");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

const Add = (first_name, last_name) => {
  // Read current data
  let ApprenantArray = readData();

  // Create a new Apprenant object
  let Apprenant = {
    id: ApprenantArray.length + 1,
    first_name: first_name,
    last_name: last_name,
  };

  // Add the new Apprenant to the array
  ApprenantArray.push(Apprenant);

  // Write the updated array back to the file
  writeData(ApprenantArray);
};

const Delete = (id) => {
  // Read current data
  let ApprenantArray = readData();

  if (id < 1 || id > ApprenantArray.length) {
    console.log(`Apprenant with id:${id} doesn't exist`);
    return;
  }

  // Remove the Apprenant with the specified id
  ApprenantArray.splice(id - 1, 1);

  // Write the updated array back to the file
  writeData(ApprenantArray);

  console.log(`Deleted Apprenant with id:${id}`);
};

module.exports = {
  Add,
  Delete,
};

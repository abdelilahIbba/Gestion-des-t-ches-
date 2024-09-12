const readline = require("readline");
const ApprenantManager = require("./Events/Events");
const Add = ApprenantManager.Add;
const Delete = ApprenantManager.Delete;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const names_list = async () => {
  const letter = await askQuestion("Enter the letter (add, delete): ");
  if (letter === "a") {
    const first_name = await askQuestion("Enter the first_name: ");
    const last_name = await askQuestion("Enter the last_name: ");
    Add(first_name, last_name);
  } else if (letter === "d") {
    const id = parseInt(await askQuestion("Enter the id: "), 10);
    Delete(id);
  } else {
    console.log("Invalid option. Please enter 'add' or 'delete'.");
  }

  rl.close();
};

names_list();
